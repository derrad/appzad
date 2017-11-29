const mongoose = require('mongoose');
const Drzava = require('../models/sfDrzave');
const sfOpstina = require('../models/sfOpstine');

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const KodDrzave=req.body.KodDrzave ;
  const Naziv = req.body.Naziv;
  const EuClan =req.body.EuClan  || false;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";

  //console.log("uid je :" + uid + " ovo je koddrzave " + req.body.KodDrzave);

  
if (!KodDrzave || !Naziv ) {
     return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
} 
else 
{
  
  if (uid) {
    //Edit opstina
    Drzava.findById(uid).exec(function(err, drzava){
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
      }
        
      if(drzava) {
        drzava.KodDrzave=KodDrzave ;
        drzava.Naziv = Naziv;
        drzava.EuClan=EuClan;
        drzava.Opis = Opis ;
        if(NameUser){drzava.NameUser = NameUser;}
        
      }
      drzava.save(function(err,results) {
        if(err){ 
          return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
        }
        return res.status(201).json({
          success: true,
          message: 'Država updated successfully',
          data:results
        });
      });
    });

  }else{
    
    // Add new DRZAVU
    let oDrzava = new Drzava(
        { 
        KodDrzave:KodDrzave ,
        Naziv : Naziv,
        EuClan:EuClan,
        Opis : Opis ,
        NameUser : NameUser
      });
    
      oDrzava.save(function(err,result) {
        if(err){ 
        return  res.status(400).json(
            { success: false, message: 'Error processing request '+ err , data:[]});
        }


        Drzava.find({_id:oDrzava._id}).exec(function(err, result){
          if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
          }
            return res.status(201).json({
            success: true,
            message:'Država saved successfully', 
            data: result
            });
          });
          
      });

    }
}
}


// // );


module.exports.listdrzave = function (req, res,next) {
  //console.log("Usao u list Drzava");
  
  Drzava.find({}).sort({created_at:-1}).exec(function(err, result){
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

module.exports.pickdrzave = function (req, res,next) {
 
  Drzava.find({}).sort({Naziv:1}).select('Naziv KodDrzave').exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
    }
   
      return res.status(200).json({
      success: true,
      message:'Successfully', 
      data: result
      });
    });

}

module.exports.getdrzava = function (req, res,next) {
//  console.log("Usao u get drzava parametar je  " + req.params.id);
  Drzava.find({_id:req.params.id}).exec(function(err, result){
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


module.exports.deledrzava = function(req, res, next) {
 // console.log("delete drzava parametar je : " + req.params.id);
 // const uid = req.params.id || '1234';
  sfOpstina.count({Drzava: req.params.id}, function(err,count){
   //  console.log("drzave u opstinama DA VIDIM COUNT" +  count);
      if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , number:0}); }
      if(count>0){
          return res.status(200).json({
            success: false,
            message: 'Države not removed successfully, relation is used with this ID',
            data:[]
          });
      }else{
        Drzava.remove({_id: req.params.id }, function(err){
          if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }
          return res.status(201).json({
              success: true,
              message: 'Država removed successfully',
              data:[]
            });
        });

      }
  });


}
