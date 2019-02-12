const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const cors = require('cors');

app = express();

app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(path.join(__dirname, 'dist'), 'index.html'));
});

app.use(serveStatic(path.join(__dirname, 'dist')));// redirige toutes les ressources vers le fichiers

const port = process.env.PORT || 5000;
app.listen(port);