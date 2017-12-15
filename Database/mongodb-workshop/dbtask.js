const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

movieSchema = {
  name: String
}

var Movie = mongoose.model('Movie', movieSchema);

var movie = new Movie({ name: 'Cool Runnings' });

movie.save(function (err, doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
