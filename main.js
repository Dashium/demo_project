const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World! from Dashium');
});

app.listen(3000, function() {
  console.log('Le serveur écoute sur le port 3000!');
});
