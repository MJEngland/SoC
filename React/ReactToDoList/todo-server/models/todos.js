var mongoose = require ('mongoose');
var express = require ('express');
var router = express.Router();

var todoSchema = new mongoose.Schema({
  id: String,
  todo: String,
  complete: Boolean,
})

module.exports = mongoose.model('todos', todoSchema);
