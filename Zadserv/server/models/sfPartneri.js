const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
var sfDrzave = require('./sfDrzave');

 var Schema = mongoose.Schema;

var sfPartnerRacun = new Schema({
    KyeSearch : { type: String, required: [true,'Kljuc pretrage je obavezan !!!'] }, 
    Naziv     : { type: String, required: [true,'Naziv je obavezan !!!'] },
    UgovProc:{ type: Number,default:0,required:true},
    Drzava: { type:Schema.ObjectId, ref:'sfDrzave', required:true},        
    Aktivan:{type:Boolean,default:false},
    Adresa:{  AdUlica:{ type: String, required: [true,'Ulica je obavezan podatak !!!'] }, 
              AdBroj: { type: String },
              AdMesto: { type: String ,required: [true,'Mesto je obavezan podatak !!!']},
              AdPttReon: { type: String },
              AdPttPak: { type: String },
              AdDrzava: { type: String }
            },  
    Email:{ type: String},
    Pib:{ type: String},
    MatBroj:{ type: String},
    SifDelat:{ type: String},
    PdvBroj:{ type: String},
    Ziro:  [{ PzNaziv:{type:String,required: [true, 'Naziv je obavezan !!!']},
              PzRacun:{type:String,required: [true, 'Racun je obavezan !!!']},
              PzGlavni:{type:Boolean, default:false},
              PzOpis:String}] ,
    Telefon:  [{ TlNaziv:{type:String,required: [true, 'Naziv je obavezan !!!']},
            TlBroj:{type:String,required: [true, 'Broj telefona je obavezan !!!']},
            TlGlavni:{type:Boolean, default:false},
            TlOpis:String}] ,
    Kontakt:  [{ KoNaziv:{type:String,required: [true, 'Naziv je obavezan !!!']},
                KoFunkcija:{type:String},
                KoEmail:{ type: String},
                KoTelef:{ type: String},
                KoMobilni:{ type: String},
                KoOpis:String}] ,
    Opis      : { type: String },
    NameUser  : {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}

);

var sfPartnerTelefon = new Schema({
     Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
     Telefon: { type: String, required: [true, 'Telefon je obavezan !!!'] },
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}
);

var sfPartnerKontakt = new Schema({
     Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   //nastavi
   
   
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}
);


var sfPartner = new Schema({
    Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
    Ptt:{type:String},
    Opis  :{ type: String },
    NameUser: {type:String}

},
{
    timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}
);

sfPartner.plugin(mongoosePaginate);

module.exports = mongoose.model('sfPartner', sfPartner,'sfPartner');