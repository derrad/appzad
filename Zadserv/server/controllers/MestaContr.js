const mongoose = require('mongoose');
const Mesta = require('../models/sfMesta');
const sfOpstina = require('../models/sfOpstine');
const sfDrzava = require('../models/sfDrzave');

const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD MESTO";
const TIP_TRANS_UPDATE ="CHANGES MESTO";
const TIP_TRANS_DEL = "DELETE MESTO";


module.exports.create = function (req, res,next) {
  const uid = req.params.id ;

  const Opstina=req.body.Opstina ;
  const Naziv = req.body.Naziv;
  const Ptt =req.body.Ptt;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";

  //console.log("uid je :" + uid + " ovo je Opstina " + req.body.Opstina);

  
  if (!Opstina || !Naziv ) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
  } else {
  
if (uid) {
  //Edit opstina
  Mesta.findById(uid).exec(function(err, mesto){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
    }
      
    if(mesto) {
      mesto.Naziv = Naziv;
      mesto.Ptt=Ptt;
      mesto.Opis = Opis ;
      if(NameUser){mesto.NameUser = NameUser;}
      
    }
    mesto.save(function(err,results) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
      }
      try{
        SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Naziv , NameUser)
      } catch(ex){}      

      return res.status(201).json({
        success: true,
        message: 'Mesto updated successfully',
        data:results
      });
    });
  });

}else{
  
  // Add new mesto
 
  var slog = sfOpstina.findById(Opstina,(err, doc)=>{
    if(err){ 
      return null;
     }
    // console.log(" vracam ovaj doc ali da vidim kako ide " + doc);
   //  return doc;

     let oMesto = new Mesta(
      { 
      Opstina: doc._id ,
      Naziv : Naziv,
      Ptt:Ptt,
      Opis : Opis ,
      NameUser : NameUser
    });
      
    oMesto.save(function(err,result) {
      if(err){ 
       return  res.status(400).json(
          { success: false, message: 'Error processing request '+ err , data:[]});
      }

      try{
        SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Naziv , NameUser)
      } catch(ex){}

      Mesta.find({}).populate({path:'Opstina', populate:{path:'Drzava'}}).exec(function(err, result){
        if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
        }
          return res.status(201).json({
          success: true,
          message:'Mesto saved successfully', 
          data: result
          });
        });
        
    //  return res.status(201).json({
    //     success: true,
    //     message: 'Opstina saved successfully',
    //     data: result
  
    //   });
    });


  });
  
}
}
}

module.exports.listmesta = function (req, res,next) {
 // console.log("Usao u list Mesta");
  
  //Mesta.find({}).populate('Opstina',['RegOzn','Naziv','Drzava']).populate('Drzava').exec(function(err, result){
    //.populate({path:'Opstina', populate:{path:'Drzava'}})
  Mesta.find({}).sort({created_at:-1}).populate({path:'Opstina', populate:{path:'Drzava'}}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
    }

    //console.log(result[0].Naziv + "  " + result[0].Opstina.Naziv + "   " +result[0].Opstina.Drzava.Naziv);
      //return res.status(200).json( result);

      return res.status(200).json({
       success: true,
       message:'Successfully', 
       data: result
       }); 
    });

}


module.exports.getomesta = function (req, res,next) {
 // console.log("Usao u get mesta parametar je  " + req.params.id);
  Mesta.find({_id:req.params.id}).exec(function(err, result){
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

module.exports.delemesta = function(req, res, next) {
 // console.log("delete Mesta parametar je : " + req.params.id);
 // const uid = req.params.id || '1234';
 Mesta.remove({_id: req.params.id }, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }
        try{
          SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Mesto" , req.user.email)
          } catch(ex){}
       
        return res.status(201).json({
            success: true,
            message: 'Mesta removed successfully',
            data:[]
          });
  });
}