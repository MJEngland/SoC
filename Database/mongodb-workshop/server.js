const express = require("express");
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

mongoose.connect('mongodb://localhost/school', { useMongoClient: true });

const GoTSchema = {
  id: Number,
  url: String,
  name: String,
  season: Number,
  number: Number,
  airdate: String,
  airtime: String,
  airstamp: String,
  runtime: Number,
  image: {
    medium: String,
    original: String,
  },
  summary: String,
  _links: {
    self: {
      href: String,
    }
  }
}

//Making a constructor (capital M).
var Movie = mongoose.model('Movie', GoTSchema);


app.get("/", function(req, res) {
  res.send("This is working : )");
})

//Using query parameters ? e.g. ?id=4955
app.get("/episodes", function(req, res) {
  const query = req.query;
  Movie.find(query, function (err, movies){
    if (err){
      res.send("Error happend here");
    }
    res.send(movies);
  })
})

//Get an individual episode
app.get('/episodes/:episodeId', function(req, res) {
  const episodeId = req.params.episodeId;
  if(episodeId) {
    Movie.findOne({id: episodeId}, function(err, episode){
      if(err){
        return res.send('Error happened here');
      }
      return res.send(episode);
    });
  }
})

app.listen(PORT, function(){
  console.log("I am listening on " + PORT);
})
