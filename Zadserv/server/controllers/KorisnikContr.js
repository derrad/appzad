var mongoose = require('mongoose');
var Korisnik = require('../models/apKorisnik');

module.exports.create = function (req, res) {
 // var error;
  var user = new Korisnik(req.body);
  
  user.save(function (err, result) {
     console.log("Usao u save Korisnik ");
     if(err){
        console.log(err); 
        res.json(err); 
      }
   // console.log( " ovo saljem nazad" + result.toString());
    res.json(result);
  });
}


module.exports.list = function (req, res) {
  console.log("Usao u list Korisnik - tu sam");
  Korisnik.find({}, function (err, results) {
    //console.log( results.toString());
    res.json(results);
  });
}