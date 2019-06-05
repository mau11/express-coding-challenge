const express = require('express');
const app = express();

const db = require('./db');
const port = process.env.PORT || 3000;

const index = require('./routes/index.js');

app.get('/', index);

app.listen(port, () => console.log(`Open http://localhost:${port} to see a response.`));