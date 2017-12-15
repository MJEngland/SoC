const express= require("express");
const formidable = require("express-formidable");
const fs=require('fs');
const path=require('path');
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const PORT = 3000;

const app = express();

app.use(formidable());

app.engine("handlebars", handlebars({defaultLayout: "main"}));

app.set("view engine", "handlebars");

mongoose.connect('mongodb://localhost/myForm', { useMongoClient: true });


var personSchema = {
  id: Number,
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  telephone: Number,
  password: String
}

var person = mongoose.model('person', personSchema);

app.get("/", (req, res)=>{
  res.sendFile(__dirname+"/forms.html");
})

app.post("/signUp", (req,res)=>{
console.log(req.fields);
  console.log('post to /')
  console.log(req.fields);
  fs.writeFile(path.join(__dirname, 'form.json'), JSON.stringify(req.fields), function(error){
    if(error){
      console.log('ERROR');
      return res.send('ERROR')
    };
    person.insert( JSON.stringify(req.fields),{w:1},(err,record)=>{
      console.log('record added as '+record[0]._id);
    });
    res.send('ok');

  //  res.render("persons", req.fields);
  });
});

app.listen(PORT, function(){
  console.log("You are connected too port " + PORT);
})
