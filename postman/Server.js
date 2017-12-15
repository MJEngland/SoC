//basic requires
const express = require('express');
const formidable = require('express-formidable');
const mongoose = require('mongoose');

//defines which port we are using
const PORT = 3000

//initialise express
const app = express();

//initialise formidable
app.use(formidable());

//a basic GET on / route - initially just a response to prove that server is listening
app.get('/', function(request, response){
  response.send('This page is working')
});

app.post('/', function(request, response) {
  response.send(request.fields);
})

//error handling for "not found"
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

//a basic LISTEN for responses on port defined by PORT
app.listen(PORT, function() {
  console.log('Server Running on port:'+PORT);
});
