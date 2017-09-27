var mongoose = require('mongoose');
var Zadrugar = require('../models/sfZadrugar');

module.exports.create = function (req, res) {
 // var error;
  var zadr = new Zadrugar(req.body);
  
  zadr.save(function (err, result) {
     console.log("Usao u save Zadrugar kada je ovo");
     if(err){
        console.log(err); 
        res.json(err); 
      }
   // console.log( " ovo saljem nazad" + result.toString());
    res.json(result);
  });
}


module.exports.list = function (req, res) {
  console.log("Usao u list Zadrugar - tu sam");
  Zadrugar.find({}, function (err, results) {
    //console.log( results.toString());
    res.json(results);
  });
}