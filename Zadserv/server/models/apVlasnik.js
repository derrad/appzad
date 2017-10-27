var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var apVlasnik = new Schema({ 
    ZiroVlasnik:  [{Naziv:{type:String,required: [true, 'Naziv je obavezan !!!']},Racun:{type:String,required: [true, 'Racun je obavezan !!!']},Glavni:{type:Boolean, default:false},Opis:String}] ,
    TelefVlasnik: [{Naziv:{type:String,required: [true, 'Naziv je obavezan !!!']},Telefon:{type:String,required: [true, 'Telefon je obavezan !!!']},Glavni:{type:Boolean, default:false},Opis:String}] ,
    Ime: { type: String, required: [true, 'Ime vlasnika je obavezno !!!'] },
    Adresa:{ type: String},
    Glavni  : {type:Boolean, default:false},
    Mesto:{ type: String},
    PttReon:{ type: String},
    PttPak:{ type: String},
    Direktor:{ type: String},
    KomRukovac:{ type: String},
    Blagajnik:{ type: String},
    Pib:{ type: String},
    MatBroj:{ type: String},
    SifDelat:{ type: String},
    PdvBroj:{ type: String},
    Slika:{ type: String},//{type:Schema.Types.Mixed},
    Sud:{ type: String},
    UplRacPorJed:{ type: String},
    NazPorJed:{ type: String},
    NameUser: {type:String}
    
},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
},
{ minimize: false }
);

apVlasnik.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE VLASNIK");
    next();
  });
//apVlasnik.plugin(mongoosePaginate);

module.exports = mongoose.model('apVlasnik', apVlasnik,"apVlasnik");

