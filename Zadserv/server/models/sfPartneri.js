const mongoose = require('mongoose');
const Drzave = require('./sfDrzave');
const Schema = mongoose.Schema;

const sfPartner = new Schema({ 
    KyeSearch : {type: String, required: [true,'Kljuc pretrage je obavezan !!!'], trim: true}, 
    Naziv     : {type: String, required: [true,'Naziv je obavezan !!!'], trim: true},
    UgovProc:{type: Number,default:0,required:true},
    Drzava: {type:Schema.ObjectId, ref:'sfDrzave', required:true},        
    Aktivan:{type:Boolean,default:false},
    DrzavaRef:{type:Object},
    Adresa:{  AdUlica:   { type: String, required: [true,'Ulica je obavezan podatak !!!'], trim: true }, 
              AdBroj:    { type: String, trim: true},
              AdMesto:   { type: String, required: [true,'Mesto je obavezan podatak !!!'], trim: true },
              AdPttReon: { type: String, trim: true },
              AdPttPak:  { type: String, trim: true },
              AdDrzava:  { type: String, trim: true }
            },  
    Email: {type: String},
    Pib: {type: String, trim: true},
    MatBroj: {type: String, trim: true },
    SifDelat: {type: String, trim: true},
    PdvBroj: {type: String, trim: true},
    Ziro:  [{ PzNaziv: {type:String,required: [true, 'Naziv je obavezan !!!'], trim: true},
              PzRacun: {type:String,required: [true, 'Racun je obavezan !!!'], trim: true},
              PzGlavni: {type:Boolean, default:false},
              PzOpis: {type:String} }] ,
    Telefon: [{ TlNaziv: {type:String,required: [true, 'Naziv je obavezan !!!']},
                TlBroj: {type:String,required: [true, 'Broj telefona je obavezan !!!']},
                TlGlavni: {type:Boolean, default:false},
                TlOpis: {type: String, default:false}}] ,
    Kontakt:  [{ KoNaziv:{type:String,required: [true, 'Naziv je obavezan !!!']},
                KoFunkcija:{type:String, default:false},
                KoEmail:{ type: String, default:false},
                KoTelef:{ type: String, default:false},
                KoMobilni:{ type: String, default:false},
                KoOpis:{type: String,default:false} }] ,
    Opis      : {type: String, default:false },
    NameUser  : {type:String, default:false}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}

);



sfPartner.pre('save', function(next) {
    // do stuff
   // console.log('u partnerima sam');
    self = this;
    Drzave.findById(self.Drzava).exec(function(err, drzava){
        if(err){ 
            self.DrzavaRef ={_id : null, name : null}
        }
        if (drzava){
            self.DrzavaRef = {_id : drzava._id, name : drzava.Naziv}
        }else{
            self.DrzavaRef ={_id : null, name : null}
        }
        next();
    });

});


// sfPartner.pre('update', function(next) {
//     // do stuff
//     console.log('u partnerima sam update');
//     // self = this;
//     console.log(this.Naziv);
//     next();

// });

module.exports = mongoose.model('sfPartner', sfPartner,'sfPartner');