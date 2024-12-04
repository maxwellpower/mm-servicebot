// app.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const removeUserRoute = require('./routes/removeUser');
const listActionsRoute = require('./routes/listActions');

const app = express();
const PORT = process.env.PORT || 3000;

// Use etags to avoid updating actions when unnecessary
app.enable('etag');

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/remove-user', removeUserRoute);
app.use('/list-actions', listActionsRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

