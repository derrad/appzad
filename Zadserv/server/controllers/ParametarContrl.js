const mongoose = require('mongoose');
const Parametar = require('../models/apParametar');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');


const TIP_TRANS_INSERT ="ADD PARAMETAR";
const TIP_TRANS_UPDATE ="CHANGES PARAMETAR";
const TIP_TRANS_DEL = "DELETE PARAMETAR";


module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const Naziv=req.body.Naziv ;
  const Koristi=req.body.Koristi || false;
  const VredString = req.body.VredString;
  const VredNumeric =req.body.VredNumeric || 0;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";// req.body.NameUser || "System";

  if (!Naziv) {
        return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] });
  } 
  else 
  {
    if (uid) {
      //Edit paarmetar
      Parametar.findById(uid).exec(function(err, param){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }

        if(param) {
          param.Naziv = Naziv ;
          param.Koristi = Koristi ;
          param.VredString = VredString;
          param.VredNumeric = VredNumeric ;
          param.Opis = Opis ;
          param.NameUser = NameUser;
        
          param.save(function(err,results) {
                if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }
                try{
                  SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Naziv , NameUser)
                } catch(ex){}                
                
                try{
                   SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Naziv , NameUser)
                } catch(ex){}

                return res.status(201).json({
                          success: true,
                          message: 'Parametar updated successfully',
                          data:results});
                });
        }
          
      });

    }else{
          
          // Add new Parametar
          let oParam = new Parametar({
            Naziv : Naziv ,
            Koristi : Koristi ,
            VredString : VredString,
            VredNumeric : VredNumeric ,
            Opis : Opis ,
            NameUser : NameUser
          });

          oParam.save(function(err,result) {
            if(err){  return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:[]});}
              
            try{
              SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Naziv , NameUser)
            } catch(ex){}

          return res.status(201).json({
              success: true,
              message: 'Parametar saved successfully',
              data: result

            });
          });
    }//if (uid) and else n

  }// if (!Naziv )

}//module.exports.create



module.exports.listparam = function (req, res,next) {
// console.log("Usao u list param" + req.user);

 Parametar.find({}).sort({created_at:-1}).exec(function(err, result){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] });}

    return res.status(200).json({
    success: true,
    message:'Successfully', 
    data: result
    });

  });

}


module.exports.getparam = function (req, res,next) {
 // console.log("Usao u get param parametar je  " + req.params.id);
  Parametar.find({_id:req.params.id}).exec(function(err, result){
    if(err){ 
      return res.status(400).json(
      { success: false, message:'Error processing request '+ err , data:[] }
      ); 
    }

      return res.status(200).json({
      success: true, 
      message:'Successfully',
      data: result
      });
    });

}

module.exports.deleparam = function(req, res, next) {
//  console.log("delete parametar parametar je : " + req.params.id);
 // const uid = req.params.id || '1234';
 Parametar.remove({_id: req.params.id }, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:[] }); }
     
        try{
          SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Parametar" , req.user.email)
          } catch(ex){}
        return res.status(201).json({
            success: true,
            message: 'Parametar removed successfully',
            data:[]
          });
  });
}



// function AddActivity(tActivnost,tTrans,tNumber,topis, tuser){
//   let oLogNew = new LogAct({
//     TypeAct:tActivnost || TypeA.Activities[0], // ; Start,
//     Transact:tTrans,
//     TransactNumber:tNumber,
//     Opis:topis,
//     NameUser:tuser
//   });
//   LogAct.addLog(oLogNew, (err, logNew) => {
//      if(err){
//        console.log("Error add aktivnost");

//      } else {
//        console.log("add aktivnost successfully");
//      }
//   });
// }

