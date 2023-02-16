//Import required modules
const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');

//Convert callback-based functions to promises
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Define the Notes class
class Notes {
    constructor() {
        //set file path for notes database
        this.dbFilePath = 'db/db.json';
    }

    //Read the notes database from file
    async read() {
        try {
            const data = await readFile(this.dbFilePath, 'utf-8');
            return data;
        } catch (err) {
             //if file doesn't evist, return empty array
            if (err.cod === 'ENOENT') {
                return '[]'
            } else {
                throw err;
            }
        }
    }

    //Write the notes database to file
    async write(data) {
        try {
            await writeFile(this.dbFilePath, data);
        } catch (err) {
            //if file cannot be written, throw an error
            throw new Error(`Failed to write to file: ${err.message}`);
        }
    }

    //Retrieve all notes from the database
    async retrieveAllNotes() {
        //Read the contents of the file
        const notesWritten = await this.read();
            let parsedNotes;
            try {
                //Parse the contents of the file as JSON
                parsedNotes = JSON.parse(notesWritten);
            } catch(err) {
                //if file is empty or invalid, return empty array
                parsedNotes = [];
            }
            return parsedNotes;
    }

    //Add note to database
    async addNote(note) {
        const {title, text} = note;
        //if no title or no text is added, throw new error
        if (!title || !text) {
            throw new Error("Title and text cannot be blank");
        }
        //desctructure new note
        const newNote = {title, text, id: uuid()};

        const notesWritten = await this.retrieveAllNotes();
        const updatedNotes = [...notesWritten, newNote];
        const updatedNotesString = JSON.stringify(updatedNotes);
        await this.write(updatedNotesString);
        return newNote;
    }

    //Remove note from database
    async removeNote(id) {
        //await retrieval of all notes in regards to this note
        const notesWritten = await this.retrieveAllNotes();
        //filter out this note (note selected by user) from all notes retrieved. If the note has an id that is not the id selected to be removed then...
        const filteredNotes = notesWritten.filter((note) => note.id !== id);
        //filter notes as a json string
        const filteredNotesString = JSON.stringify(filteredNotes);
        //await writing filtered notes as json string
        await this.write(filteredNotesString);
    }
}
//export new notes as a method
module.exports = new Notes();