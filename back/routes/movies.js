var express = require("express");
var router = express.Router();
var MDBMoviesUrl = 'https://api.themoviedb.org/3';
var API_KEY_v3 = 'd6b2be5b089e4559e9f0d8544e0e9dbf';
const axios = require('axios');

router.get('/popular', (req, res) => {
  axios.get(`${MDBMoviesUrl}/movie/popular?api_key=${API_KEY_v3}`).then(response => {
    res.json({"data": response.data.results});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/:movieId', (req,res) => {
  if (req.params.movieId) {
    axios.get(`${MDBMoviesUrl}/movie/${req.params.movieId}?api_key=${API_KEY_v3}`).then(response => {
      res.json({"data": response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }
});

router.get('/:movieId/similar', (req,res) => {
  if (req.params.movieId) {
    axios.get(`${MDBMoviesUrl}/tv/${req.params.movieId}/similar?api_key=${API_KEY_v3}`).then(response => {
      res.json({"data": response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }
});

module.exports = router;