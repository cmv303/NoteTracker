const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
    read() {
        return readFile('db/db.json','utf-8')
    }
    write(note) {
        console.log("this is a note", note);
        return writeFile('db/db.json', JSON.stringify(note))
    }
    getAllNotes() {
        return this.read().then((notesWritten) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notesWritten));
            } catch(err) {
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }
    addNote(note) {
        const {title, text} = note;
        if (!title || !text) {
            throw new Error("title and text cannot be blank");
        }
        const newNote = {title, text, id: uuid()};
        return this.getAllNotes()
            .then((notesWritten) => [...notesWritten, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote)
    }
    
    removeNote(id) {
        return this.getAllNotes()
            .then((notesWritten) => notesWritten.filter((note) => note.id !== id))
            .then((updatedNotes) => this.write(updatedNotes))
    }
}
module.exports = new Notes();