const mongoose = require('mongoose');
const Zadrugar = require('../models/sfZadrugar');
const Uput = require('../models/prUputDok');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD ZADRUGAR";
const TIP_TRANS_UPDATE ="CHANGES ZADRUGAR";
const TIP_TRANS_DEL = "DELETE ZADRUGAR";



module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const IDZadrugar = req.body.IDZadrugar ; // ovde ubaci ako ga nema nej uzme novi broj
  const Ime = req.body.Ime ;
  const Prezime = req.body.Prezime ;
  const ImeRoditelja =  req.body.ImeRoditelja ;
  const DatRodjenja = req.body.DatRodjenja ;
  const Aktivan = req.body.Aktivan || false ;
  const Pol = req.body.Pol ;
  const OpstinaRodj =  req.body.OpstinaRodj ;
  const MestoRodj =  req.body.MestoRodj ;
  const VrstaIdentifikatoraPrimaoca =  req.body.VrstaIdentifikatoraPrimaoca ;
  const Jmbg =  req.body.Jmbg ;
  const Adresa =  req.body.Adresa ;
  const BrLK =  req.body.BrLK ;
  const Telefon =  req.body.Telefon ;
  const ZadEmail =  req.body.ZadEmail ;
  const MestaID = req.body.MestaID ;
  const ZanimanjaID = req.body.ZanimanjaID ;
  const TipZadrugar = req.body.TipZadrugar ;
  const BrRadneKnjiz = req.body.BrRadneKnjiz ;
  const BrIndexa = req.body.BrIndexa ;
  const TipIsplate = req.body.TipIsplate ;
  const BankaID = req.body.BankaID ;
  const BrojRacuna = req.body.BrojRacuna ;
  const BeliBroj = req.body.BeliBroj ;
  const BrojDana = req.body.BrojDana ;
  const Slika = req.body.Slika ;
  const Opis = req.body.Opis ;
  const NameUser = req.user.email || "System";



  if (!IDZadrugar || !Ime || !Prezime || !DatRodjenja || !VrstaIdentifikatoraPrimaoca || !TipZadrugar) {
     // res.statusMessage='Posted data is not correct or incompleted.';
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:[] }).end();
  } else {
  
  if (uid) {
    //Edit partner
    Zadrugar.findById(uid).exec(function(err, zadr){
    if(err){ 
      // console.log("nema nema !!!");
    // res.statusMessage = err;
      return res.status(400).json({ success: false, message: 'Error processing request ', data:[] }).end(); 
    }
    // res.statusMessage = "RALE - Current password does not match";
     //return res.status(400).json({ success: false, message: 'RALE - Hocu ovu gresku', data:[] }); 
   

    if(zadr) {
         
      zadr.IDZadrugar = IDZadrugar ; 
      zadr.Ime = Ime ;
      zadr.Prezime = Prezime ;
      zadr.ImeRoditelja = ImeRoditelja ;
      zadr.DatRodjenja = DatRodjenja ;
      zadr.Aktivan = Aktivan ;
      zadr.Pol = Pol ;
      zadr.OpstinaRodj =  OpstinaRodj ;
      zadr.MestoRodj =  MestoRodj ;
      zadr.VrstaIdentifikatoraPrimaoca =  VrstaIdentifikatoraPrimaoca ;
      zadr.Jmbg =  Jmbg ;
      zadr.Adresa =  Adresa ;
      zadr.BrLK =  BrLK ;
      zadr.Telefon =  Telefon ;
      zadr.ZadEmail =  ZadEmail ;
      zadr.MestaID = MestaID ;
      zadr.ZanimanjaID = ZanimanjaID ;
      zadr.TipZadrugar = TipZadrugar ;
      zadr.BrRadneKnjiz = BrRadneKnjiz ;
      zadr.BrIndexa = BrIndexa ;
      zadr.TipIsplate = TipIsplate ;
      zadr.BankaID = BankaID ;
      zadr.BrojRacuna = BrojRacuna ;
      zadr.BeliBroj = BeliBroj ;
      zadr.BrojDana = BrojDana ;
      zadr.Slika = Slika ;
      zadr.Opis = Opis;
      zadr.NameUser = NameUser;
     
    }
    zadr.save(function(err,result) {
      if(err){ 
        //console.log("GRESKA UPDATE -" + err);
        //res.statusMessage = err;
        return res.status(400).
        json({ success: false, message: 'Error processing request ', data:[] }).end(); 
      }

        try{
          SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Ime + ' ' + Prezime , NameUser)
        } catch(ex){}
      

      return res.status(201).json({
        success: true,
        message: 'Zadrugar updated successfully', 
        data:result
      });
    });
  });

}else{
 // console.log("Usao u ADD");
  // Add new zadrugar
  let oZadrugar = new Zadrugar({
    IDZadrugar : IDZadrugar ,
    Ime : Ime ,
    Prezime : Prezime ,
    ImeRoditelja : ImeRoditelja ,
    DatRodjenja : DatRodjenja ,
    Aktivan : Aktivan ,
    Pol : Pol ,
    OpstinaRodj :  OpstinaRodj ,
    MestoRodj :  MestoRodj ,
    VrstaIdentifikatoraPrimaoca :  VrstaIdentifikatoraPrimaoca ,
    Jmbg :  Jmbg ,
    Adresa :  Adresa ,
    BrLK :  BrLK ,
    Telefon :  Telefon ,
    ZadEmail :  ZadEmail ,
    MestaID : MestaID ,
    ZanimanjaID : ZanimanjaID ,
    TipZadrugar : TipZadrugar ,
    BrRadneKnjiz : BrRadneKnjiz ,
    BrIndexa : BrIndexa ,
    TipIsplate : TipIsplate ,
    BankaID : BankaID ,
    BrojRacuna : BrojRacuna ,
    BeliBroj : BeliBroj ,
    BrojDana : BrojDana ,
    Slika : Slika ,
    Opis : Opis,
    NameUser : NameUser

  });

  oZadrugar.save(function(err,result) {
    if(err){ 
      // const emsg = " Error processing request";
      console.log(JSON.stringify(err));
      return res.status(400).json(
            { success: false, message:JSON.stringify(err), data:[] }).end();
    }
    try{
      SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Ime + ' ' + Prezime , NameUser)
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


module.exports.listzadrugar = function (req, res,next) {
  //console.log("Usao u list Radnik - tu sam");
  Zadrugar.find({}).sort({created_at:-1}).populate('MestaID',['Naziv']).populate('ZanimanjaID',['Naziv'])
  .populate('BankaID',['Naziv']).exec(function(err, result){
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

module.exports.listactivzadrugar = function (req, res,next) {
  //console.log("Usao u list Radnik - tu sam");
  Zadrugar.find({Aktivan:true}).sort({Ime:1,Prezime:1}).populate('MestaID',['Naziv']).populate('ZanimanjaID',['Naziv'])
  .populate('BankaID',['Naziv']).exec(function(err, result){
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

module.exports.pickzadrugar = function (req, res,next) {
  //console.log("Usao u list Radnik - tu sam");
  Zadrugar.find({Aktivan:true}).sort({Ime:1,Prezime:1})
              .select('IDZadrugar Ime Prezime DatRodjenja TipZadrugar MestaRef ZanimanjaRef  Jmbg')
              .exec(function(err, result){
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

module.exports.getzadrugar = function (req, res,next) {
  // console.log("Usao u list Radnik - tu sam  " + req.params.id);
  // Zadrugar.find({_id : req.params.id }).populate('MestaID',['Naziv']).populate('ZanimanjaID',['Naziv'])
  // .populate('MestaID',['Naziv']).populate('ZanimanjaID',['Naziv']).populate('BankaID',['Naziv'])
  Zadrugar.findById(req.params.id).exec(function(err, result){
     if(err){ 
      // res.statusMessage = err;
       return res.status(404).json(
         { success: false, message:'Error processing request ' , data:[] }
         ).end(); 
     }
     
     // console.log(JSON.stringify(result));
    // console.log(" FullName" +  result[0].fullName);
      return res.status(200).json({
       success: true, 
       message:'Zadrugar find successfully',
       data: result
       });
     });
 
 }

 module.exports.delezadrugar = function(req, res, next) {
  Zadrugar.remove({_id: req.params.id}, function(err){
       if(err){ 
         //res.statusMessage = err;
         const emsg = "Error processing request";
         // if(err.errmsg){emsg = err.errmsg; }else{emsg = err; }
         return res.status(400).json({ success: false, message: emsg , data:[]}).end(); 
       }
       try{
         SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Zadrugar" , req.user.email)
         } catch(ex){}
       return res.status(201).json({
           success: true,
           message: 'Zadrugar removed successfully', 
           data:[]
       });
 });
}


module.exports.countzadrugar = function(req, res, next) {
  //console.log("parametar je : " + req.params.id);
	Zadrugar.count({}, function(err,count){
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

module.exports.countactivzadrugar = function(req, res, next) {
  //console.log("parametar je : " + req.params.id);
	Zadrugar.count({Aktivan:true}, function(err,count){
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

module.exports.countUputZadrugar = function(req, res, next) {
   const aggOpts = [{
         $unwind: "$Stavke"
     }
     
   ];

    // const aggregatorOpts = [{
    //   $group: {
    //     _id: "$PosloviID",
    //     total: { $sum: 1 }
    //   }
    // }];

  //   {
  //     $group: {
  //       _id: "$ZadrugarID",
  //       total: { $sum: 1 }
  //     }
  // }
  //Uput.aggregate(aggOpts, function(err, logs){

    Uput.find({}).sort({Godina:1,Broj:1}).populate('Stavke.ZadrugarID').exec(function(err, logs){
      if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , number:0}); }
  
     // console.log(logs);
      return res.status(200).json({
        success: true,
        message: 'Successfully',
        data: logs
      });
    });

}