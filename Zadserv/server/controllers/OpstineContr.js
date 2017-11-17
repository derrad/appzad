const mongoose = require('mongoose');
const Opstina = require('../models/sfOpstine');
const sfDrzava = require('../models/sfDrzave');
const Mesta = require('../models/sfMesta');

const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD OPSTINU";
const TIP_TRANS_UPDATE ="CHANGES OPSTINA";
const TIP_TRANS_DEL = "DELETE OPSTINU";

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;

  const Drzava=req.body.Drzava ;
  const RegOzn=req.body.RegOzn ;
  const Naziv = req.body.Naziv;
  const SifPorez =req.body.SifPorez;
  const KontBr=req.body.KontBr;
  const PozivNaBr=req.body.PozivNaBr;

  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";

 // console.log("uid je :" + uid + " ovo je opština " + req.body.Drzava);

  
  if (!Drzava || !RegOzn || !Naziv ) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
  } else {
  // ovde treba proveriti pre save postoji li drzava - mozda je neko u medjuvremenu obrisao
    sfDrzava.count({_id:Drzava}, function(err,count){
      console.log("drzava " + count);
      if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , number:0}); }
      if(count == 0){
        console.log("drzava count je nula " + count);
          return res.status(422).json({
            success: false,
            message: 'Država not exist. Posted data is not correct or incompleted.',
            data:[]
           }).end();
          // return;
      }
    });

if (uid) {
  //Edit opstina
  Opstina.findById(uid).exec(function(err, opstina){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
    }
      
    if(opstina) {
      opstina.Drzava=Drzava ;
      opstina.RegOzn=RegOzn ;
      opstina.Naziv = Naziv;
      opstina.SifPorez=SifPorez;
      opstina.KontBr=KontBr;
      opstina.PozivNaBr=PozivNaBr;
      opstina.Opis = Opis ;
      if(NameUser){opstina.NameUser = NameUser;}
      
    }
    opstina.save(function(err,results) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
      }
      try{
        SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Naziv , NameUser)
      } catch(ex){}        
      return res.status(201).json({
        success: true,
        message: 'Opstina updated successfully',
        data:results
      });
    });
  });

}else{
  
  // Add new Opstina
 
  var slog = sfDrzava.findById(Drzava,(err, doc)=>{
    if(err){ 
      return  res.status(400).json(
        { success: false, message: 'Error Drzava not exist '+ err , data:[]});
     }
     //console.log(" vracam ovaj doc ali da vidim kako ide " + doc);
   //  return doc;

     let oOpstina = new Opstina(
      { 
      Drzava: Drzava ,
      RegOzn:RegOzn ,
      Naziv : Naziv,
      SifPorez:SifPorez,
      KontBr : KontBr,
      PozivNaBr :PozivNaBr,
      Opis : Opis ,
      NameUser : NameUser
    });
  
    //console.log(oOpstina);
    oOpstina.save(function(err,result) {
      if(err){ 
       return  res.status(400).json(
          { success: false, message: 'Error processing request '+ err , data:[]});
      }
      try{
        SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Naziv , NameUser)
      } catch(ex){}

      Opstina.find({_id:oOpstina._id}).populate('Drzava',['KodDrzave','Naziv']).exec(function(err, result){
        if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
        }
          return res.status(201).json({
          success: true,
          message:'Opstina saved successfully', 
          data: result
          });
        });
    });


  });
 

}
}
}

module.exports.listopstine = function (req, res,next) {
  //console.log("Usao u list Opstina");
  
  Opstina.find({}).sort({created_at:-1}).populate('Drzava',['KodDrzave','Naziv']).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
    }
   // console.log( "Hvatam ga " +  result.Drzava.Naziv);
      return res.status(200).json({
      success: true,
      message:'Successfully', 
      data: result
      });
    });

}


module.exports.getopstine = function (req, res,next) {
//  console.log("Usao u get Opstina parametar je  " + req.params.id);
  Opstina.find({_id:req.params.id}).exec(function(err, result){
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

module.exports.deleopstine = function(req, res, next) {
  //console.log("delete Opstina parametar je : " + req.params.id);
 // const uid = req.params.id || '1234';

 Mesta.count({Opstina: req.params.id}, function(err,count){
  console.log("mesta u opstinama DA VIDIM COUNT" +  count);
   if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , number:0}); }
   if(count>0){
       return res.status(200).json({
         success: false,
         message: 'Opština not removed successfully, relation is used with this ID',
         data:[]
       });
   }else{
    Opstina.remove({_id: req.params.id }, function(err){
      if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }
      try{
        SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Opština" , req.user.email)
        } catch(ex){}
      return res.status(201).json({
          success: true,
          message: 'Opstina removed successfully',
          data:[]
        });
    });

   }
});


 
}