var mongoose = require('mongoose');
var Parametar = require('../models/apParametar');

module.exports.create = function (req, res) {
 // var error;
  var parametar = new Parametar(req.body);
  //  parametar.pre('save', function(next) {
  //   console.log("appparameter u pre nego save");
  //   next();
  // });
  // error = parametar.validateSync();
  // if(error){
  //  error.CustomError ="Nisam ni otisao na server";
  //   res.json(error); 
  // }
  //var error = parametar.validateSync();

  parametar.save(function (err, result) {
      console.log("Usao u save Parametar");
     
      //  if(error){
      //    console.error("PARAMETAR SAVE IMAM ERROR IZ parametar.validateSync() " + error); 
      //    // next(error);
      //    res.status(400);
      //    res.json(error); 
      //   //400 
      // }

     //debugger;
      if(err){
         //console.log(err); 
        res.json(err); 
      }
    //console.log( " ovo saljem nazad" + result.toString());
    res.json(result);
  });
}





module.exports.list = function (req, res) {
  console.log("Usao u list parametara");
  Parametar.find({}, function (err, results) {
    //console.log( results.toString());
    res.json(results);
  });
}