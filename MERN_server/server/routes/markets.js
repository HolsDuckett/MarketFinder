var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var markets = require('../models/MarketsSchema');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('im sending to the middly bit');
});

router.get('/', async (request, response) => {
  try {
    var result = await routine.find().exec();
    response.send(result);
 } catch (error) {
    response.status(500).send(error);
 }
});

router.post('/', async (request, response) => {
  try {
    var new_routine = new routine(request.body);
    var result = await new_routine.save();
    response.send(result);
 } catch (error) {
    response.status(500).send(error);
 }
});

module.exports = router;