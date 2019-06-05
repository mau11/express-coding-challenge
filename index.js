const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const index = require('./routes/index.js');
const createUser = require('./routes/createUser');

app.get('/', index);

// Create a new user
app.post('/users/create', createUser);

app.listen(port, () => console.log(`Open http://localhost:${port} to see a response.`));