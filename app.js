// app.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const removeUserRoute = require('./routes/removeUser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/remove-user', removeUserRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

