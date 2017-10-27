const mongoose = require('mongoose');
const Radnik = require('../models/sfRadnik');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD RADNIK";
const TIP_TRANS_UPDATE ="CHANGES RADNIK";
const TIP_TRANS_DEL = "DELETE RADNIK";


module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const SifraRad = req.body.SifraRad ;
  const Ime = req.body.Ime ;
  const Prezime = req.body.Prezime ;
  const Jmbg = req.body.Jmbg ;
  const Aktivan = req.body.Aktivan  || false;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";
  
  if (!SifraRad || !Ime || !Prezime) {
      res.statusMessage='Posted data is not correct or incompleted.';
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] }).end();
  } else {
  
if (uid) {
  //Edit radnik
  Radnik.findById(uid).exec(function(err, radnik){
    if(err){ 
     // console.log("Radnika nema !!!");
      res.statusMessage = err;
      return res.status(400).json({ success: false, message: 'Error processing request ', data:[] }).end(); 
    }
    // res.statusMessage = "RALE - Current password does not match";
     //return res.status(400).json({ success: false, message: 'RALE - Hocu ovu gresku', data:[] }); 
   

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
        //console.log("GRESKA UPDATE -" + err);
        res.statusMessage = err;
        return res.status(400).
        json({ success: false, message: 'Error processing request ', data:[] }).end(); 
      }

      try{
        const UpdRad = SifraRad + " " + Prezime+ " " + Ime;
        SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, UpdRad , NameUser)
      } catch(ex){}
      

      return res.status(201).json({
        success: true,
        message: 'Radnik updated successfully', 
        data:result
      });
    });
  });

}else{
  
  // Add new radnik
  let oRadnik = new Radnik({
    SifraRad :SifraRad,
    Ime :Ime,
    Prezime :Prezime,
    Jmbg:Jmbg,
    Aktivan:Aktivan,
    Opis:Opis,
    NameUser :NameUser
  });

  oRadnik.save(function(err,result) {
    if(err){ 
      if(err.errmsg){res.statusMessage = err.errmsg; }else{res.statusMessage = err; }
      
      return  res.status(400).json(
          { success: false, message: 'Error processing request ', data:[] }).end();
    }
      
    try{
      const NoviRad = SifraRad + " " + Prezime+ " " + Ime;
      SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, NoviRad , NameUser)
    } catch(ex){}
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
  //console.log("Usao u list Radnik - tu sam");
  Radnik.find({}).sort({created_at:-1}).exec(function(err, result){
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


module.exports.getradnik = function (req, res,next) {
 // console.log("Usao u list Radnik - tu sam  " + req.params.id);
  Radnik.find({_id : req.params.id }).exec(function(err, result){
    if(err){ 
      res.statusMessage = err;
      return res.status(404).json(
        { success: false, message:'Error processing request ' , data:[] }
        ).end(); 
    }
    
     return res.status(200).json({
      success: true, 
      message:'Radnik find successfully',
      data: result
      });
    });

}

module.exports.deleradnik = function(req, res, next) {
  // res.statusMessage = "Nema brisanja" + req.params.id;
  // return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:[]}).end(); 
   
  //console.log("Brisanje radnika : " + req.params.id);
	Radnik.remove({_id: req.params.id}, function(err){
        if(err){ 
          res.statusMessage = err;
          return res.status(400).json({ success: false, message: 'Error processing request ' , data:[]}).end(); 
        }
        try{
          SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Radnik" , req.user.email)
          } catch(ex){}
        return res.status(201).json({
            success: true,
            message: 'Radnik removed successfully', 
            data:[]
          });
  });
}


// function AddActivity(tActivnost,tTrans,tNumber,topis, tuser){
//    let oLogNew = new LogAct({
//      TypeAct:tActivnost || TypeA.Activities[0], // ; Start,
//      Transact:tTrans,
//      TransactNumber:tNumber,
//      Opis:topis,
//      NameUser:tuser
//    });
//    LogAct.addLog(oLogNew, (err, logNew) => {
//       if(err){
//         console.log("Error add aktivnost");

//       } else {
//         console.log("add aktivnost successfully");
//       }
//    });
// }