// TO CREATE SERVER
const express = require('express')

const app = express()
app.use(express.json())     //MIDDLE WARE //“If request body contains JSON data, convert it into a JavaScript object.”

const notes = []


app.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    })
})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "note fetched successfully",
        note: notes                  //“Send the notes array to the client with the name ‘notes’.”
    })
})

// app.delete('/notes/:index', (req, res) => {
//     const index = req.params.index

//     delete notes[ index ]

//     res.status(200).json({
//         message: "note deleted successfully"
//     })
// })


module.exports = app