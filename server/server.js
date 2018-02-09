const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const c = require('./../server/controller.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/:addEntry', c.create);

//add one get endpoint (app.get) like for solar happenings

app.get('/api/display', c.display);

app.put('/api/:updateEntry', c.update);

app.delete('/api/:deleteEntry', c.delete);

const port = 4000;
app.listen(port, () => console.log(`Anna's server listening on ${port}!`));