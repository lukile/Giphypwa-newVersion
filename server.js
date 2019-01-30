const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const cors = require('cors');
//const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
//const sslRedirect = require('heroku-ssl-redirect')
const forceSslRedirect = require('force-ssl-heroku');

app = express();

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // tous les requêtes du site je les accepte -- fails de sécurité
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/
app.use(cors());

/*app.enable('trust proxy');
app.use (function (req, res, next) {
    if (req.secure) {
            // request was via https, so do no special handling
            next();
    } else {
            // request was via http, so redirect to https
            res.redirect('https://' + req.headers.host + req.url);
    }
});*/

//app.use(sslRedirect(['production'], 301));
app.use(forceSslRedirect);

//app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.get('/', function(req, res) {
    res.sendFile(path.join(path.join(__dirname, 'dist'), 'index.html'));
});
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5000;
app.listen(port);