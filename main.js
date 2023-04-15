const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.send(`
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <h2>Hello World! from Dashium.</h2>
        <ul>
            <li>ENV: ${process.env.dashiumENV}</li>
        </ul>
    `);
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, './favicon.ico'));
});

app.listen(3000, function () {
    console.log('Le serveur écoute sur le port 3000!');
});
