var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var apVlasnik = new Schema({ 
    ZiroVlasnik:  [
        {Naziv:{type:String,required: [true, 'Naziv je obavezan !!!'], trim:true},
         Racun:{type:String,required: [true, 'Racun je obavezan !!!'], trim:true},
         Glavni:{type:Boolean, default:false},
         Opis: {type:String,trim:true }}
    ] ,
    TelefVlasnik: [
        { Naziv:{type:String,required: [true, 'Naziv je obavezan !!!']},
         Telefon:{type:String,required: [true, 'Telefon je obavezan !!!']},
         Glavni:{type:Boolean, default:false},
         Opis: {type:String,trim:true } 
        }] ,
    Ime: { type: String, required: [true, 'Ime vlasnika je obavezno !!!'] },
    Adresa:{ type: String,required: [true, 'Adresa vlasnika je obavezna !!!'], trim:true },
    Glavni  : {type:Boolean, default:false},
    Mesto:{ type: String, required: [true, 'Mesto vlasnika je obavezno !!!'], trim:true },
    PttReon:{ type: String, trim:true},
    PttPak:{ type: String, trim:true},
    Direktor:{ type: String, trim:true },
    KomRukovac:{ type: String, trim:true},
    Blagajnik:{ type: String, trim:true},
    Pib:{ type: String, trim:true},
    MatBroj:{ type: String, trim:true },
    SifDelat:{ type: String, trim:true},
    PdvBroj:{ type: String, trim:true},
    Slika:{ type: String, trim:true},//{type:Schema.Types.Mixed},
    Sud:{ type: String, trim:true},
    UplRacPorJed:{ type: String, trim:true },
    NazPorJed:{ type: String, trim:true},
    Opis  :{ type: String,trim:true },
    NameUser: {type:String, trim:true}
},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
},
{ minimize: false }
);

// apVlasnik.pre('save', function(next) {
//     // do stuff
//     console.log("PRE SAVE VLASNIK");
//     next();
//   });

module.exports = mongoose.model('apVlasnik', apVlasnik,"apVlasnik");

