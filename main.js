/*-----------------------------------------------------------------------------------------------------------\
|  _____     _   _____ _             _ _          _____  _____  _____  __      _______  _____  _____  _____  |
| |_   _|   (_) /  ___| |           | (_)        / __  \|  _  |/ __  \/  |    / / __  \|  _  |/ __  \|____ | |
|   | | __ _ _  \ `--.| |_ _   _  __| |_  ___    `' / /'| |/' |`' / /'`| |   / /`' / /'| |/' |`' / /'    / / |
|   | |/ _` | |  `--. \ __| | | |/ _` | |/ _ \     / /  |  /| |  / /   | |  / /   / /  |  /| |  / /      \ \ |
|   | | (_| | | /\__/ / |_| |_| | (_| | | (_) |  ./ /___\ |_/ /./ /____| |_/ /  ./ /___\ |_/ /./ /___.___/ / |
|   \_/\__,_|_| \____/ \__|\__,_|\__,_|_|\___/   \_____/ \___/ \_____/\___/_/   \_____/ \___/ \_____/\____/  |
\-----------------------------------------------------------------------------------------------------------*/
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', function (req, res) {
    res.send(`
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <h2>Hello World! from Dashium.</h2>
        <ul>
            <li>PORT: ${port}</li>
            <li>ENV: ${process.env.dashiumENV}</li>
        </ul>
    `);
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, './favicon.ico'));
});

app.listen(port, function () {
    console.log(`Le serveur écoute sur le port ${port}!`);
});
