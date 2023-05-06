const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./controllers/error.controller');
const noteRoute = require('./routes/note.route');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/notes', noteRoute);

app.use(globalErrorHandler);

module.exports = app;
