const mongoose = require('mongoose');
const Banke = require('../models/sfBanke');

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const Racun=req.body.Racun ;
  const Naziv = req.body.Naziv;
  const Aktivan =req.body.Aktivan  || false;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";
  
if (!Racun || !Naziv ) {
     return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
} 
else {
if (uid) {
    //Edit banka
    Banke.findById(uid).exec(function(err, banka){
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
      }
        
      if(banka) {
        banka.Racun=Racun ;
        banka.Naziv = Naziv;
        banka.Aktivan=Aktivan;
        banka.Opis = Opis ;
        if(NameUser){banka.NameUser = NameUser;}
        
      }
      banka.save(function(err,results) {
        if(err){ 
          return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); 
        }
        return res.status(201).json({
          success: true,
          message: 'Banka updated successfully',
          data:results
        });
      });
    });

  }else{
    
    // Add new Banku
    let oBanke = new Banke(
        { 
        Racun: Racun ,
        Naziv: Naziv,
        Aktivan:Aktivan,
        Opis : Opis ,
        NameUser : NameUser
      });
    
      oBanke.save(function(err,result) {
        if(err){ 
        return  res.status(400).json(
            { success: false, message: 'Error processing request '+ err , data:[]});
        }


        Banke.find({_id:oBanke._id}).exec(function(err, result){
          if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
          }
            return res.status(201).json({
            success: true,
            message:'Banka saved successfully', 
            data: result
            });
          });
          
      });

    }
}
}

module.exports.listbanke = function (req, res,next) {
  
  Banke.find({}).sort({created_at:-1}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
    }
      return res.status(200).json({
      success: true,
      message:'Successfully', 
      data: result
      });
    });

}


module.exports.getbanka = function (req, res,next) {

Banke.find({_id:req.params.id}).exec(function(err, result){
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


module.exports.delbanka = function(req, res, next) {
 // console.log("delete drzava parametar je : " + req.params.id);
 // const uid = req.params.id || '1234';
 Banke.remove({_id: req.params.id }, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }
        return res.status(201).json({
            success: true,
            message: 'Banke removed successfully',
            data:[]
          });
  });
}
