var mongoose = require('mongoose');
var Partner = require('../models/sfPartneri');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD KUPAC";
const TIP_TRANS_UPDATE ="CHANGES KUPAC";
const TIP_TRANS_DEL = "DELETE KUPAC";


module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const KyeSearch = req.body.KyeSearch ;
  const Naziv = req.body.Naziv ;
  const UgovProc = req.body.UgovProc || 0 ;
  const Drzava =  req.body.Drzava ;
  const Aktivan = req.body.Aktivan  || false;
  const Adresa = req.body.Adresa ;
  const Email =  req.body.Email ;
  const Pib =  req.body.Pib ;
  const MatBroj =  req.body.MatBroj ;
  const SifDelat =  req.body.SifDelat ;
  const PdvBroj =  req.body.PdvBroj ;
  const Ziro =  req.body.Ziro ;
  const Telefon =  req.body.Telefon ;
  const Kontakt =  req.body.Kontakt ;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";



  if (!KyeSearch || !Naziv || !Drzava) {
     // res.statusMessage='Posted data is not correct or incompleted.';
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] }).end();
  } else {
  
  if (uid) {
    //Edit partner
    Partner.findById(uid).exec(function(err, kupac){
    if(err){ 
      // console.log("Partnera nema !!!");
    // res.statusMessage = err;
      return res.status(400).json({ success: false, message: 'Error processing request ', data:[] }).end(); 
    }
    // res.statusMessage = "RALE - Current password does not match";
     //return res.status(400).json({ success: false, message: 'RALE - Hocu ovu gresku', data:[] }); 
   

    if(kupac) {
      kupac.KyeSearch = KyeSearch;
      kupac.Naziv = Naziv;
      kupac.UgovProc = UgovProc;
      kupac.Aktivan = Aktivan;
      kupac.Drzava = Drzava;
      kupac.Adresa = Adresa;
      kupac.Email = Email;
      kupac.Pib =  Pib ;
      kupac.MatBroj =  MatBroj ;
      kupac.SifDelat =  SifDelat ;
      kupac.PdvBroj =  PdvBroj ;
      kupac.Ziro =  Ziro ;
      kupac.Telefon =  Telefon ;
      kupac.Kontakt =  Kontakt ;
      kupac.Opis = Opis;
      kupac.NameUser = NameUser;
     
    }
    kupac.save(function(err,result) {
      if(err){ 
        //console.log("GRESKA UPDATE -" + err);
        //res.statusMessage = err;
        return res.status(400).
        json({ success: false, message: 'Error processing request ', data:[] }).end(); 
      }

        try{
          SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Naziv , NameUser)
        } catch(ex){}
      

      return res.status(201).json({
        success: true,
        message: 'Customer updated successfully', 
        data:result
      });
    });
  });

}else{
 // console.log("Usao u ADD");
  // Add new Kupac
  let oKupac = new Partner({

    KyeSearch : KyeSearch,
    Naziv : Naziv,
    UgovProc : UgovProc,
    Aktivan : Aktivan,
    Drzava : Drzava,
    Adresa : Adresa,
    Email : Email,
    Pib :  Pib ,
    MatBroj :  MatBroj ,
    SifDelat :  SifDelat ,
    PdvBroj :  PdvBroj ,
    Ziro :  Ziro ,
    Telefon :  Telefon ,
    Kontakt :  Kontakt ,
    Opis : Opis,
    NameUser :NameUser
  });

  oKupac.save(function(err,result) {
    if(err){ 
      const emsg = " Error processing request";
      console.log(JSON.stringify(err));
      return res.status(400).json(
            { success: false, message:emsg, data:[] }).end();
    }
    try{
      SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Naziv , NameUser)
    } catch(ex){}

   return res.status(201).json({
      success: true,
      message: 'Customer saved successfully',
      data: result
    });
  });

}
  }
}



module.exports.listpartner = function (req, res,next) {
  //console.log("Usao u list Radnik - tu sam");
  Partner.find({}).sort({created_at:-1}).exec(function(err, result){
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


module.exports.getpartner = function (req, res,next) {
 // console.log("Usao u list Radnik - tu sam  " + req.params.id);
 Partner.find({_id : req.params.id }).exec(function(err, result){
    if(err){ 
     // res.statusMessage = err;
      return res.status(404).json(
        { success: false, message:'Error processing request ' , data:[] }
        ).end(); 
    }
    
     return res.status(200).json({
      success: true, 
      message:'Customer find successfully',
      data: result
      });
    });

}

module.exports.delepartner = function(req, res, next) {
 	Partner.remove({_id: req.params.id}, function(err){
        if(err){ 
          //res.statusMessage = err;
          const emsg = "Error processing request";
          // if(err.errmsg){emsg = err.errmsg; }else{emsg = err; }
          return res.status(400).json({ success: false, message: emsg , data:[]}).end(); 
        }
        try{
          SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Kupac" , req.user.email)
          } catch(ex){}
        return res.status(201).json({
            success: true,
            message: 'Customer removed successfully', 
            data:[]
        });
  });
}


module.exports.countkupac = function(req, res, next) {
  //console.log("parametar je : " + req.params.id);
	Partner.count({}, function(err,count){
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