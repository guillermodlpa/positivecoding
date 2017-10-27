/**
 * A very simple web server for the Front-end code challenge.
 */

const http = require('http');
const express  = require('express');
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 5000;
var PUBLIC_DIR = 'public';
var VIEWS_DIR = 'views';

var app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/${VIEWS_DIR}`);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public directory for assets like css and js files.
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, function() {
    console.log(`${Date.now()} - Server running at port ${PORT}`);
});

app.get('/', function(req, res, next) {
    res.render('index');
});
