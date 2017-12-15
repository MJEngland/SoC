const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

const PORT = 3000;

app.engine("handlebars", handlebars({defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.get("/", function(req, res){
  res.render("index", {
    title: "Welcome to BookFace",
    image: "http://images.clipartpanda.com/book-clipart-animated-book-clipart-1.jpg",
  });
});

app.get("/profile", function(req, res){
  res.render("index", {
      title: "Profile page",
      username: "Matthew England",
      age: 30,
      location: "Birmingham",
  });
});

app.listen(PORT, function(){
  console.log("I am listening on port " + PORT);

})
