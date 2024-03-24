// imports
var express = require("express");
var app = express();
var HTTP_PORT = 8000;
var cors = require('cors');
var bodyParser = require('body-parser');

// routes
var movies = require('./routes/movies');
var tvshows = require('./routes/tv');

app.listen(HTTP_PORT, () => {
    console.log("Server running on local port");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/movies', movies)
app.use('/movie', movies);
app.use('/tv', tvshows)


app.use(function(req, res){
    res.status(404);
});

module.exports = app;