const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

  const postSchema = {
  id: Number,
  title: String,
  content: String,
  author: {
    id: Number,
    name: String
  },
  published: String,
  tag: String
}
}

var blog = mongoose.model('blog', postSchema);

var posts = new posts({ name: ' ' });

posts.save(function (err, doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
