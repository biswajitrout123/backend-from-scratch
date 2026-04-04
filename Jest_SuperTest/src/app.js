const express = require('express');
const validationsRules = require('./middlewares/validation.middleware');

const app = express();

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Hello World!"
//     });
// });

app.post('/register', validationsRules.registerUserValidationRules, (req, res) => {
    const { username, email, password } = req.body;

    res.status(201).json({
        message: 'User registered successfully', user: { username, email }
    })


})

module.exports = app;