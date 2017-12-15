var express = require('express');
var router = express.Router();
var Todo = require('../models/todos.js');

router.get('/', function(req, res, next) {
  Todo.find({}, function (err, todos) {
    if (err) return next(err);
    return res.json({payload: todos});
  });
});

router.post('/', function(req, res, next){
  const todo = new Todo(req.body);
    todo.save(function(err, result){
      if (err) {
        return res,json({error: err});
      }
      return res.json({payload: result});
    });
  });

module.exports = router;
