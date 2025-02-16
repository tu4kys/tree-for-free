const express = require('express');
const PORT = 8080;
const path = require('path');

app = express();

app.use(express.static(path.join(__dirname)));

const createPath = (page) => path.resolve(__dirname, './Resources', `${page}.html`);

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
});

app.get('/more', (req, res) => {
    res.sendFile(createPath('about'))
});

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server is on ${PORT}`)
});