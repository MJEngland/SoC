const express = require("express");
var fs = require('fs');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/', function(req, res){
  res.send('home :)');
});

app.get('/book', function(req, res) {
  res.sendFile(path.join(__dirname, 'data.json'));
});
//ctrl shift D to duplicate code
//:bookname takes it as a parameter

app.get('/book/:bookname', function(req, res) {
  const bookname = req.params.bookname;
  fs.readFile(path.join(__dirname, 'data.json'), function(error, file){
//If there is an error this handles it
    if (error) {
      console.log(error);
      return res.send('nope!');
    }
    let data =JSON.parse(file);
    const answer = data[bookname];
    if (!answer){
      return res.send('No book of that name');
    }
    res.send(answer);
  })

});

app.listen(3000, function(){
    console.log("listening on port " + PORT);

});
//Need data in a file

// Need to read out a file
fs.readFile
// Take in some user parameters - user infro

//Need to get right info from the data
