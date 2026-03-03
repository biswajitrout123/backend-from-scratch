const express = require('express');


const app = express();      //CREATE SERVER INSTANCE

// IF USER REQUEST THEN THIS COMES ON RESPONSE
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/about', (req, res) => {
    res.send('About Page')
})


app.listen(3000, () => {   // START SERVER
    console.log("Server running on port 3000");
})

