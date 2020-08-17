const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (reg, res) => {

})

app.listen(4003, () => {
    console.log('listening on 4003')
})