var mongoose = require('mongoose');
var Partner = require('../models/sfPartneri');

const LogAct = require('../models/apActlog');
const TypeA = require('../enum/serverenum');

const TIP_TRANS_INSERT ="ADD KUPAC";
const TIP_TRANS_UPDATE ="CHANGES KUPAC";
const TIP_TRANS_DEL = "DELETE KUPAC";

module.exports.create = function (req, res) {
 // var error;
  var customer = new Partner(req.body);
  
  customer.save(function (err, result) {
     console.log("Usao u save Partner kada je ovo");
     if(err){
        console.log(err); 
        res.json(err); 
      }
   // console.log( " ovo saljem nazad" + result.toString());
    res.json(result);
  });
}


module.exports.list = function (req, res) {
  console.log("Usao u list Partner - tu sam");
  Partner.find({}, function (err, results) {
    //console.log( results.toString());
    res.json(results);
  });
}