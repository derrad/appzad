var mongoose = require('mongoose');
var Zanimanja = require('../models/sfZanimanja');

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const Sifra = req.body.Sifra ;
  const Naziv = req.body.Naziv ;
  const StepenSS = req.body.StepenSS ;
  const NivoUnosa = req.body.NivoUnosa ;
  const Opis = req.body.Opis ;
  const NameUser = req.body.NameUser || "TEST";
 // const radnik_id = req.body.radnik_id ;

  console.log("uid je :" + uid + " ovo je Naziv " + req.body.Naziv);
 // console.log("radnik_id je :" + radnik_id);
  
  if (!Naziv || !StepenSS || !Sifra || !NivoUnosa) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
  } else {
  
if (uid) {
  //Edit zanimanja
  Zanimanja.findById(uid).exec(function(err, zanimanja){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
    }
      
    if(zanimanja) {
      zanimanja.Sifra = Sifra ;
      zanimanja.Naziv = Naziv ;
      zanimanja.StepenSS = StepenSS ;
      zanimanja.NivoUnosa = NivoUnosa ;
      zanimanja.Opis = Opis ;
      zanimanja.NameUser = NameUser;
     
    }
    zanimanja.save(function(err,results) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
      }
      return res.status(201).json({
        success: true,
        message: 'Zanimanja updated successfully',
        data:results
      });
    });
  });

}else{
  
  // Add new Zanimanje
  let oZanimanja = new Zanimanja({
    Sifra : Sifra ,
    Naziv: Naziv,
    StepenSS: StepenSS ,
    NivoUnosa : NivoUnosa,
    Opis : Opis ,
    NameUser : NameUser
  });

  oZanimanja.save(function(err,result) {
    if(err){ 
     return  res.status(400).json(
        { success: false, message: 'Error processing request '+ err , data:null});
    }
      
   return res.status(201).json({
      success: true,
      message: 'oZanimanje saved successfully',
      data: result

    });
  });

}
}
}



module.exports.listzanimanja = function (req, res,next) {
  console.log("Usao u list zanimanja");
  
  Zanimanja.find({}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:null }); 
    }
      return res.status(200).json({
      success: true, 
      data: result
      });
    });

}


module.exports.getzanimanja = function (req, res,next) {
  console.log("Usao u get Zanimanja " + req.params.id);
  Zanimanja.find({_id:req.params.id}).exec(function(err, result){
    if(err){ 
      return res.status(400).json(
      { success: false, message:'Error processing request '+ err , data:null }
      ); 
    }
      return res.status(200).json({
      success: true, 
      data: result
      });
    });

}

module.exports.delezanimanja = function(req, res, next) {
  console.log("delete  zanimanja parametar je : " + req.params.id);
	Zanimanja.remove({_id: req.params.id}, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:null}); }
        return res.status(201).json({
            success: true,
            message: 'Zanimanje removed successfully',
             data:null
          });
  });
}