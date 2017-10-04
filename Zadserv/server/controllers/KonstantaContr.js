const mongoose = require('mongoose');
const Konst = require('../models/sfKonstanta');

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const Datum = req.body.Datum || new Date();
  const UcPenz = req.body.UcPenz ;
  const UcZdrav = req.body.UcZdrav ;
  const UcNormTr = req.body.UcNormTr ;
  const UcOlak = req.body.UcOlak  ;
  const UcPorez = req.body.UcPorez  ;
  const Pdv = req.body.Pdv  ;
  const Clanarin = req.body.Clanarin  ;
  const OsPorez = req.body.OsPorez  ;
  const OsUmanjen = req.body.OsUmanjen  ;
  const OsPio1 = req.body.OsPio1  ;
  const OsPio2 = req.body.OsPio2  ;
  const OsZdrav1 = req.body.OsZdrav1  ;
  const OsZdrav2 = req.body.OsZdrav2  ;
  const OsNez1 = req.body.OsNez1  ;
  const OsNez2 = req.body.OsNez2  ;
  const OsMinOsDop = req.body.OsMinOsDop  ;
  const OsMaxOsDop = req.body.OsMaxOsDop  ;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";
 // const radnik_id = req.body.radnik_id ;

  console.log("uid je :" + uid + " ovo je datum " + req.body.Datum);
 // console.log("radnik_id je :" + radnik_id);
  
  if (!Datum  ) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:null });
  } else {
  
if (uid) {
  //Edit radnik
  Konst.findById(uid).exec(function(err, konst){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
    }
      
    if(konst) {
      konst.Datum = Datum ;
      konst.UcPenz = UcPenz ;
      konst.UcZdrav = UcZdrav;
      konst.UcNormTr = UcNormTr ;
      konst.UcOlak = UcOlak  ;
      konst.UcPorez = UcPorez  ;
      konst.Pdv = Pdv  ;
      konst.Clanarin = Clanarin  ;
      konst.OsPorez = OsPorez  ;
      konst.OsUmanjen = OsUmanjen  ;
      konst.OsPio1 = OsPio1  ;
      konst.OsPio2 = OsPio2  ;
      konst.OsZdrav1 = OsZdrav1  ;
      konst.OsZdrav2 = OsZdrav2  ;
      konst.OsNez1 = OsNez1  ;
      konst.OsNez2 = OsNez2  ;
      konst.OsMinOsDop = OsMinOsDop  ;
      konst.OsMaxOsDop = OsMaxOsDop  ;
      konst.Opis = Opis ;
      konst.NameUser = NameUser;
     
    }
    konst.save(function(err,results) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
      }
      return res.status(201).json({
        success: true,
        message: 'Konstante updated successfully',
        data:results
      });
    });
  });

}else{
  
  // Add new posao
  let oKonst = new Konst({
    Datum : Datum ,
    UcPenz : UcPenz ,
    UcZdrav : UcZdrav,
    UcNormTr : UcNormTr ,
    UcOlak : UcOlak  ,
    UcPorez : UcPorez  ,
    Pdv : Pdv  ,
    Clanarin : Clanarin  ,
    OsPorez : OsPorez  ,
    OsUmanjen : OsUmanjen  ,
    OsPio1 : OsPio1  ,
    OsPio2 : OsPio2  ,
    OsZdrav1 : OsZdrav1  ,
    OsZdrav2 : OsZdrav2  ,
    OsNez1 : OsNez1  ,
    OsNez2 : OsNez2  ,
    OsMinOsDop : OsMinOsDop  ,
    OsMaxOsDop : OsMaxOsDop  ,
    Opis : Opis ,
    NameUser : NameUser
  });

  oKonst.save(function(err,result) {
    if(err){ 
     return  res.status(400).json(
        { success: false, message: 'Error processing request '+ err , data:null});
    }
      
   return res.status(201).json({
      success: true,
      message: 'Konstante saved successfully',
      data: result

    });
  });

}
}
}



module.exports.listkonst = function (req, res,next) {
 // console.log("Usao u list konstante");
  
  Konst.find({}).sort({created_at:-1}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:null }); 
    }
      return res.status(200).json({
      success: true,
      message:'Successfully', 
      data: result
      });
    });

}


module.exports.getkonst = function (req, res,next) {
  console.log("Usao u get konstante parametar je  " + req.params.id);
  Konst.find({_id:req.params.id}).exec(function(err, result){
    if(err){ 
      return res.status(400).json(
      { success: false, message:'Error processing request '+ err , data:null }
      ); 
    }
      return res.status(200).json({
      success: true, 
      message:'Successfully',
      data: result
      });
    });

}

module.exports.delekonst = function(req, res, next) {
  console.log("delete konstante parametar je : " + req.params.id);
 // const uid = req.params.id || '1234';
	Konst.remove({_id: req.params.id }, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); }
        return res.status(201).json({
            success: true,
            message: 'Konstante removed successfully',
            data:null
          });
  });
}