const mongoose = require('mongoose');
const LogAct = require('../models/apActlog');


module.exports.listaAct = function (req, res,next) {
    //console.log("Usao u list Radnik - tu sam");
    LogAct.find({}).sort({created_at:-1}).exec(function(err, result){
      if(err){ 
        res.statusMessage = err;
        return res.status(400).json({ success: false, message:'Error processing request ' , data:[]}).end(); 
      }
        return res.status(200).json({
        success: true, 
        data: result
        });
      });
  
  }