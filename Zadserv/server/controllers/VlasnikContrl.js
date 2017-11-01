const Vlasnik = require('../models/apVlasnik.js');

module.exports.create = function (req, res,next) {
  const uid = req.params.id ;
  const Ime = req.body.Ime ;
  const Adresa = req.body.Adresa ;
  const Glavni = req.body.Glavni  || false;
  const Mesto = req.body.Mesto ;
  const PttReon = req.body.PttReon ;
  const PttPak = req.body.PttPak ;
  const Direktor = req.body.Direktor ;
  const KomRukovac = req.body.KomRukovac ;
  const Blagajnik = req.body.Blagajnik ;
  const Pib = req.body.Pib ;
  const MatBroj = req.body.MatBroj ;
  const SifDelat = req.body.SifDelat ;
  const PdvBroj = req.body.PdvBroj ;
  const Slika = req.body.Slika ;
  const Sud = req.body.Sud ;
  const UplRacPorJed = req.body.UplRacPorJed ;
  const NazPorJed = req.body.NazPorJed ;
  const NameUser = req.body.NameUser || "TEST";
  const ZiroVlasnik =  req.body.ZiroVlasnik || [];
  const TelefVlasnik =  req.body.TelefVlasnik || [];
  
 
  console.log("uid je :" + uid + " ovo je ime " + req.body.Ime);
  
  if (!Ime || !Adresa || !Mesto) {
      return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.' });
  } else {
  
if (uid) {
  //Edit vlasnik
  Vlasnik.findById(uid).exec(function(err, vlasnik){
    if(err){ 
      return res.status(400).json({ success: false, message: 'Error processing request '+ err }); 
    }
      
    if(vlasnik) {
      vlasnik.Ime = Ime ;
      vlasnik.Adresa = Adresa ;
      vlasnik.Glavni = Glavni ;
      vlasnik.Mesto = Mesto ;
      vlasnik.PttReon = PttReon ;
      vlasnik.PttPak = PttPak ;
      vlasnik.Direktor = Direktor ;
      vlasnik.KomRukovac = KomRukovac ;
      vlasnik.Blagajnik = Blagajnik ;
      vlasnik.Pib = Pib ;
      vlasnik.MatBroj = MatBroj ;
      vlasnik.SifDelat = SifDelat ;
      vlasnik.PdvBroj = PdvBroj ;
      vlasnik.Slika = Slika ;
      vlasnik.Sud = Sud;
      vlasnik.UplRacPorJed =UplRacPorJed ;
      vlasnik.NazPorJed = NazPorJed ;
      vlasnik.NameUser = NameUser ;
      vlasnik.ZiroVlasnik = ZiroVlasnik ;
      vlasnik.TelefVlasnik =  TelefVlasnik ;
      
    }
    vlasnik.save(function(err,result) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err }); 
      }
      return res.status(201).json({
        success: true,
        message: 'Vlasnik updated successfully',
        data:result
      });
    });
  });

}else{
  
  // Add new expense
  let oVlasnik = new Vlasnik({
    Ime : Ime ,
    Adresa: Adresa ,
    Glavni : Glavni ,
    Mesto : Mesto ,
    PttReon : PttReon ,
    PttPak : PttPak ,
    Direktor : Direktor ,
    KomRukovac : KomRukovac ,
    Blagajnik : Blagajnik ,
    Pib : Pib ,
    MatBroj :MatBroj ,
    SifDelat : SifDelat ,
    PdvBroj : PdvBroj ,
    Slika : Slika ,
    Sud : Sud,
    UplRacPorJed:UplRacPorJed, 
    NazPorJed : NazPorJed ,
    NameUser :NameUser ,
    ZiroVlasnik : ZiroVlasnik ,
    TelefVlasnik :  TelefVlasnik 
  });

  oVlasnik.save(function(err,result) {
    if(err){ 
     return  res.status(400).json(
        { success: false, message: 'Error processing request '+ err });
    }
      
   return res.status(201).json({
      success: true,
      message: 'Vlasnik saved successfully',
      data: result

    });
  });

}
  }
}





module.exports.getvlasnik = function (req, res,next) {
 // console.log("Usao u get vlasnik  - tu sam  " + req.params.id);
  Vlasnik.find({_id:req.params.id}).exec(function(err, vlasnik){
    if(err){ 
      return res.status(400).json(
      { success: false, message:'Error processing request '+ err , data:null }
      ); 
    }
      return res.status(200).json({
      success: true, 
      data: vlasnik
      });
    });

}

module.exports.listavlasnik = function (req, res,next) {
    Vlasnik.find({}).exec(function(err, vlasnik){
    if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err }); 
    }
      return res.status(200).json({
      success: true, 
      data: vlasnik
      });
    });

}