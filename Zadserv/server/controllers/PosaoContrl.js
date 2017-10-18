const mongoose = require('mongoose');
const Posao = require('../models/sfPosao.js');


module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const Naziv = req.body.Naziv ;
  const StepenSS = req.body.StepenSS ;
  const Skola = req.body.Skola ;
  const Sifra = req.body.Sifra ;
  const Sifra1 = req.body.Sifra1  ;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";
 
  //console.log("uid je :" + uid + " ovo je Naziv " + req.body.Naziv);
 
  
  if (!Naziv || !StepenSS ) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
  } else {
  
if (uid) {
  //Edit radnik
  Posao.findById(uid).exec(function(err, posao){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
    }
      
    if(posao) {
     
      posao.Naziv = Naziv ;
      posao.StepenSS = StepenSS ;
      posao.Skola = Skola ;
      posao.Sifra = Sifra ;
      posao.Sifra1 = Sifra1  ;
      posao.Opis = Opis ;
      posao.NameUser = NameUser;
     
    }
    posao.save(function(err,results) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
      }
      return res.status(201).json({
        success: true,
        message: 'Posao updated successfully',
        data:results
      });
    });
  });

}else{
  
  // Add new posao
  let oPosao = new Posao({
    Naziv: Naziv,
    StepenSS: StepenSS ,
    Skola : Skola,
    Sifra : Sifra ,
    Sifra1 : Sifra1  ,
    Opis : Opis ,
    NameUser : NameUser
  });

  oPosao.save(function(err,result) {
    if(err){ 
     return  res.status(400).json(
        { success: false, message: 'Error processing request '+ err , data:[]});
    }
      
   return res.status(201).json({
      success: true,
      message: 'Posao saved successfully',
      data: result
    });
  });

}
}
}



module.exports.listposao = function (req, res,next) {
//  console.log("Usao u list posao - tu sam");
  
  Posao.find({}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
    }
      return res.status(200).json({
      success: true, 
      data: result
      });
    });

}


module.exports.getposao = function (req, res,next) {
  //console.log("Usao u list posao - tu sam  " + req.params.id);
  Posao.find({_id:req.params.id}).exec(function(err, result){
    if(err){ 
      return res.status(400).json(
      { success: false, message:'Error processing request '+ err , data:[] }
      ); 
    }
      return res.status(200).json({
      success: true, 
      data: result
      });
    });

}

module.exports.deleposao = function(req, res, next) {
  //console.log("parametar je : " + req.params.id);
	Posao.remove({_id: req.params.id}, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:[]}); }
        return res.status(201).json({
            success: true,
            message: 'Posao removed successfully',
             data:[]
          });
  });
}