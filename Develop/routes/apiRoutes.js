//routes the HTTP POST requests to the specified path with the specified callback functions
const router = require('express').Router();
const notes = require('../db/notes');

router.get('/notes',(req, res) => {
    notes.retrieveAllNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
});

router.post('/notes', (req, res) => {
    notes.addNote(req.body)
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
});

router.delete('/notes/:id', (req, res) => {
    notes.removeNote()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
});
module.exports = router;