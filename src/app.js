const express = require('express');
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json()); // MIDDLE WARE FOR GET DATA

/* API
POST /notes => Create a note
GET /notes => Get all notes
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note
*/

app.post("/notes", async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

app.get("/notes", async (req, res) => {

    const notes = await noteModel.findOne({
        title: "test_title"
    })

    res.status(200).json({
        message: "Note fetched successfully",
        notes: notes
    })
})

module.exports = app