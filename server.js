//Dependencies
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

//initialize express
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Middleware
app.use(express.static('./develop/public'));




//Routes
app.get(['/', '/notes', '/api/notes'], (req, res) => {
    switch(req.path) {
        case '/':
            res.sendFile(path.join(__dirname, 'index.html'));
            break;
        case '/notes':
            res.sendFile(path.join(__dirname, 'notes.html'));
            break;
        case '/api/notes':
            res.sendFile(path.join(__dirname, 'db/db.json'));
            break;
        default:
            res.sendStatus(404);
    }
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        })})});

        //listen for requests
        app.listen(port, () => console.log(`App listening on port ${port}!`));