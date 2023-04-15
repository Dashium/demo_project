const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send(`
        <h2>Hello World! from Dashium.</h2>
        <ul>
            <li>ENV: ${process.env.dashiumENV}</li>
        </ul>
    `);
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile('./favicon.ico');
});

app.listen(3000, function () {
    console.log('Le serveur écoute sur le port 3000!');
});
