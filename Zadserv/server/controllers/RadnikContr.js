var mongoose = require('mongoose');
var Radnik = require('../models/sfRadnik');

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const SifraRad = req.body.SifraRad ;
  const Ime = req.body.Ime ;
  const Prezime = req.body.Prezime ;
  const Jmbg = req.body.Jmbg ;
  const Aktivan = req.body.Aktivan  || false;
  const Opis = req.body.Opis ;
  const NameUser = req.body.NameUser || "TEST";
 // const radnik_id = req.body.radnik_id ;

  console.log("uid je :" + uid + " ovo je sifra " + req.body.SifraRad);
 // console.log("radnik_id je :" + radnik_id);
  
  if (!SifraRad || !Ime || !Prezime) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:null });
  } else {
  
if (uid) {
  //Edit radnik
  Radnik.findById(uid).exec(function(err, radnik){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
    }
      
    if(radnik) {
      radnik.SifraRad = SifraRad;
      radnik.Ime = Ime;
      radnik.Prezime = Prezime;
      radnik.Jmbg = Jmbg;
      radnik.Aktivan = Aktivan;
      radnik.Opis = Opis;
      radnik.NameUser = NameUser;
     
    }
    radnik.save(function(err,result) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
      }
      return res.status(201).json({
        success: true,
        message: 'Radnik updated successfully', 
        data:result
      });
    });
  });

}else{
  
  // Add new expense
  let oRadnik = new Radnik({
    SifraRad :SifraRad,
    Ime :Ime,
    Prezime :Prezime,
    Jmbg:Jmbg,
    Aktivan:Aktivan,
    Opis:Opis,
    NameUser :NameUser

    // expensedate: dt,
    // expensetype: typ,
    // expenseamt: amt,
    // expensedesc: desc
  });

  oRadnik.save(function(err,result) {
    if(err){ 
     return  res.status(400).json(
        { success: false, message: 'Error processing request '+ err, data:null });
    }
      
   return res.status(201).json({
      success: true,
      message: 'Radnik saved successfully',
      data: result
    });
  });

}
  }
}



module.exports.listradnik = function (req, res,next) {
  console.log("Usao u list Radnik - tu sam");
  // Radnik.find({}, function (err, results) {

  //   //console.log( results.toString());
  //   res.json(results);
  // });
  Radnik.find({}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err , data:null}); 
    }
      return res.status(200).json({
      success: true, 
      data: result
      });
    });

}


module.exports.getradnik = function (req, res,next) {
  console.log("Usao u list Radnik - tu sam  " + req.params.id);
  Radnik.find({_id:req.params.id}).exec(function(err, result){
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

module.exports.deleradnik = function(req, res, next) {
  console.log("parametar je : " + req.params.id);
	Radnik.remove({_id: req.params.id}, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:null}); }
        return res.status(201).json({
            success: true,
            message: 'Radnik removed successfully', 
            data:null
          });
  });
}