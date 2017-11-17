const Vlasnik = require('../models/apVlasnik.js');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT ="ADD VLASNIK";
const TIP_TRANS_UPDATE ="CHANGES VLASNIK";
const TIP_TRANS_DEL = "DELETE VLASNIK";

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
  const NameUser = req.user.email || "TEST";
  const ZiroVlasnik =  req.body.ZiroVlasnik || [];
  const TelefVlasnik =  req.body.TelefVlasnik || [];
  const Opis = req.body.Opis ;
  
 
  //console.log("uid je :" + uid + " ovo je ime " + req.body.Ime);
  
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
      vlasnik.Opis = Opis ;
      
    }
    vlasnik.save(function(err,result) {
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err }); 
      }
      try{
        SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Ime , NameUser)
      } catch(ex){}

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
    TelefVlasnik :  TelefVlasnik,
    Opis : Opis  
  });

  oVlasnik.save(function(err,result) {
    if(err){ 
     return  res.status(400).json(
        { success: false, message: 'Error processing request '+ err });
    }
    
    try{
      SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Ime , NameUser)
    } catch(ex){}

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
      message:'Successfully request ',
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
      message:'Successfully request ',
      data: vlasnik
      });
    });

}
class RacVlasnik {
  constructor (Naziv, Racun) {
    this.Naziv = Naziv;
    this.Racun = Racun;
  }
}

function GetRacun(){

  Vlasnik.find({},{ZiroVlasnik:1}).exec(function(err, vlasnik){
    if(err){ console.log("Error" + err); 
      }; 

      
      var ListaRacuni = [];

      if (vlasnik.length === 1 ){
        var NameArray = vlasnik[0];
        console.log("Provera nije bilo greske ispisujem");
      //  console.log(NameArray.ZiroVlasnik);

         NameArray.ZiroVlasnik.forEach(element => {
          ListaRacuni.push(new RacVlasnik(element.Naziv,element.Racun));
         // console.log(element);
       });
       console.log("Lista racuna je velicine " + ListaRacuni.length);
       ListaRacuni.forEach(item => {
            console.log("Lista racuna Naziv - " + item.Naziv);
            console.log("Lista racuna Racun - " +item.Racun);
     });
      }else{
        console.log("vlasnik.count - " + vlasnik.count);
      }
      
      // NameArray.ZiroVlasnik.forEach(element => {
      //   console.log(element);
      // });

    });

}

module.exports.delevlasnik = function(req, res, next) {
  //console.log("parametar je : " + req.params.id);
	Vlasnik.remove({_id: req.params.id}, function(err){
        if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:[]}); }
        try{
          SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + " Vlasnik" , req.user.email)
          } catch(ex){}

        return res.status(201).json({
            success: true,
            message: 'Vlasnik removed successfully',
             data:[]
          });
  });
}


module.exports.listaracvlasnik = function (req, res,next) {
  Vlasnik.find({},{ZiroVlasnik:1}).exec(function(err, vlasnik){
  if(err){ 
     return res.status(400).json({ success: false, message:'Error processing request '+ err,  data: [] }); 
  }
    try {
      const ListaRacuni = [];
      if (vlasnik.length === 1 ){
        const NameArray = vlasnik[0];
        NameArray.ZiroVlasnik.forEach(element => {
          ListaRacuni.push(new RacVlasnik(element.Naziv,element.Racun));
        });
      }
      return res.status(200).json({
        success: true, 
        message:'Successfully request ',
        data: ListaRacuni
      });   
      
    } catch (error) {
      return res.status(400).json(
        { success: false, 
          message:'Error processing request '+ error ,
          data: []
        }
        );  
    }
  });

}