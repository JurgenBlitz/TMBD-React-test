var express = require("express");
var router = express.Router();
var MDBMoviesUrl = 'https://api.themoviedb.org/3';
var API_KEY_v3 = 'd6b2be5b089e4559e9f0d8544e0e9dbf';
const axios = require('axios');

router.get('/popular', (req, res) => {
  axios.get(`${MDBMoviesUrl}/tv/popular?api_key=${API_KEY_v3}`).then(response => {
    res.json({"data": response.data.results});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/:showId', (req,res) => {
  if (req.params.showId) {
    axios.get(`${MDBMoviesUrl}/tv/${req.params.showId}?api_key=${API_KEY_v3}`).then(response => {
      res.json({"data": response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }
});

router.get('/:showId/similar', (req,res) => {
  if (req.params.showId) {
    axios.get(`${MDBMoviesUrl}/tv/${req.params.showId}/similar?api_key=${API_KEY_v3}`).then(response => {
      res.json({"data": response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }
});

module.exports = router;