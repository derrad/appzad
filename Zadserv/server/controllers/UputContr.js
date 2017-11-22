const mongoose = require('mongoose');
const Zadrugar = require('../models/sfZadrugar');
const Uput = require('../models/prUputDok');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD UPUT";
const TIP_TRANS_UPDATE ="CHANGES UPUT";
const TIP_TRANS_DEL = "DELETE UPUT";

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;

  const PartneriID = req.body.PartneriID ; 
  const TipDok = req.body.TipDok || 'UPUT' ;
  const Datum = req.body.Datum || new Date();
  const Knjizeno =  req.body.Knjizeno || false ;
  const Storno = req.body.Storno || false ;
  const Broj = req.body.Broj ;
  const Godina = req.body.Godina ;
  const RacVlasnika =  req.body.RacVlasnika ;
  const PosloviID =  req.body.PosloviID ;
  const Stavke =  req.body.Stavke ;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";



  if (!PartneriID || !TipDok || !Datum || !Broj || !PosloviID || !Stavke) {
     // res.statusMessage='Posted data is not correct or incompleted.';
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] }).end();
  } else {
  
  if (uid) {
    //Edit partner
    Uput.findById(uid).exec(function(err, uput){
    if(err){ 
      // console.log("nema nema !!!");
    // res.statusMessage = err;
      return res.status(400).json({ success: false, message: 'Error processing request ', data:[] }).end(); 
    }
    // res.statusMessage = "RALE - Current password does not match";
     //return res.status(400).json({ success: false, message: 'RALE - Hocu ovu gresku', data:[] }); 
   
    if(uput) {
         
      uput.PartneriID = PartneriID ; 
      uput.TipDok = TipDok ;
      uput.Datum = Datum ;
      uput.Knjizeno =  Knjizeno ;
      uput.Storno = Storno ;
      uput.Broj = Broj ;
      uput.Godina = Godina ;
      uput.RacVlasnika =  RacVlasnika ;
      uput.PosloviID =  PosloviID ;
      uput.Stavke =  Stavke ;
      uput.Opis = Opis;
      uput.NameUser = NameUser;
     
    }
    uput.save(function(err,result) {
      if(err){ 
        //console.log("GRESKA UPDATE -" + err);
        //res.statusMessage = err;
        return res.status(400).
        json({ success: false, message: 'Error processing request ', data:[] }).end(); 
      }

        try{
          SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, Broj, Broj + '/' + Godina , NameUser)
        } catch(ex){}
      

      return res.status(201).json({
        success: true,
        message: 'Uput updated successfully', 
        data:result
      });
    });
  });

}else{
  //console.log("Usao u ADD" + " racun vlasnika " + RacVlasnika +  " Tip dokumenta je " + TipDok  ); 
  // Add new Uput
  let oUput = new Uput({
    PartneriID: PartneriID ,
    TipDok: TipDok ,
    Datum: Datum ,
    Knjizeno:  Knjizeno ,
    Storno: Storno ,
    Broj: Broj ,
    Godina: Godina ,
    RacVlasnika:  RacVlasnika ,
    PosloviID :  PosloviID ,
    Stavke :  Stavke ,
    Opis : Opis,
    NameUser : NameUser

  });

  oUput.save(function(err,result) {
    if(err){ 
      // const emsg = " Error processing request";
      // console.log(JSON.stringify(err));
      return res.status(400).json(
            { success: false, message:JSON.stringify(err), data:[] }).end();
    }
    try{
      SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, Broj,  Broj + '/' + Godina , NameUser)
    } catch(ex){}

   return res.status(201).json({
      success: true,
      message: 'Zadrugar saved successfully',
      data: result
    });
  });

}
  }
}


module.exports.listUput = function (req, res,next) {
  //console.log("Usao u list Radnik - tu sam");
  Uput.find({}).sort({created_at:-1}).populate('PartneriID').populate('PosloviID').populate('Stavke.ZadrugarID').exec(function(err, result){
    if(err){ 
      res.statusMessage = err;
      return res.status(400).json({ success: false, message:'Error processing request ' , data:[]}).end(); 
    }
      return res.status(200).json({
        message:'Successfully', 
        success: true, 
        data: result
      });
    });

}

module.exports.getUput = function (req, res,next) {
  
  Uput.find({_id : req.params.id }).exec(function(err, result){
     if(err){ 
      return res.status(404).json(
         { success: false, message:'Error processing request ' , data:[] }
         ).end(); 
     }
     
      return res.status(200).json({
       success: true, 
       message:'Uput find successfully',
       data: result
       });
     });
 
 }

 module.exports.deleUput = function(req, res, next) {
  Uput.remove({_id: req.params.id}, function(err){
       if(err){ 
         //res.statusMessage = err;
         const emsg = "Error processing request";
         // if(err.errmsg){emsg = err.errmsg; }else{emsg = err; }
         return res.status(400).json({ success: false, message: emsg , data:[]}).end(); 
       }
       try{
         SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Uput" , req.user.email)
         } catch(ex){}
       return res.status(201).json({
           success: true,
           message: 'Uput removed successfully', 
           data:[]
       });
 });
}


module.exports.countUput = function(req, res, next) {
  //console.log("parametar je : " + req.params.id);
	Uput.count({}, function(err,count){
        //console.log("DA VIDIM COUNT" +  count);
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , number:0}); }
       // console.log("VRACAM BROJ KOJI JE  : " + count);
         return res.status(200).json({
            success: true,
            message: 'Successfully',
            number:count
          });
  });
}


module.exports.getUputBrojGod = function (req, res,next) {
  //console.log(" pozivam getUputBrojGod " + req.body.Datum  + " a dobijam zahtev od " + req.user.email );
  let Datum = new Date();
  let Datum1;
  try{
    Datum1 = new Date(req.body.Datum);
  }catch(e) {
    console.log("Greska u  datumu" + e.message);
  }
  
  // if (req.body.Datum instanceof Date){
  //   console.log("Datum je poslat");
  //   Datum = req.body.Datum;
  // }
  if (Datum1 instanceof Date){
     Datum = Datum1;
  }
  const Godina = Datum.getFullYear();

  Uput.find({Godina : Godina }).exec(function(err, result){
     if(err){ 
      return res.status(404).json(
         { success: false, message:'Error processing request ' , data:{broj:0,godina:0} }
         ).end(); 
     }
      const Broj = result.length + 1;
      return res.status(200).json({
       success: true, 
       message:'Uput get number successfully',
       data: { broj:Broj, godina:Godina }
       });
     });
 
 }