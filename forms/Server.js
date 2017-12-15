//Require express library
const express = require('express');

//install express-formidable using npm install express-formidable --save
const formidable = require('express-formidable');
const path = require('path');
var fs = require("fs");
//initialise server
var app= express();

//use express-formidable
app.use(formidable());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'forms.html'))
})

app.post('/', function (req, res) {
  console.log("post too /");
  console.log(req.fields);

    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(req.fields), function(error){
    if (error){
    console.log(error);
    return res.send("error");
  }
  res.send('Thanks')
});
});

//listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


//fs.writeFile

//JSON.stringify
//JSON.parse

//node fileName.js to set up server to listen on those ports.
