const mongoose = require('mongoose');
const sfMesta = require('../models/sfMesta');
const sfZanimanja = require('../models/sfZanimanja');
const sfBanke = require('../models/sfBanke');
const EnumServ = require('../enum/serverenum');

var Schema = mongoose.Schema;


var sfZadrugar = new Schema({
    IDZadrugar:{ type: Number,unique: true, required: [true, 'ID numericki je obavezan!!!'],default:0},
    Ime:{type:String,required: [true, 'Ime je obavezno !!!']},
    Prezime : { type: String, required: [true, 'Prezime je obavezno !!!'] },
    ImeRoditelja : { type: String},
    DatRodjenja:{type:Date, default: Date.now,required: [true, 'Datum je obavezan !!!']},
    Aktivan:{type:Boolean,default:false},
    Pol: {
            type : String,
            default : 'Neodredjen',
            enum : EnumServ.PolZadruga
       },
    OpstinaRodj : { type: String},
    MestoRodj: { type: String},
    VrstaIdentifikatoraPrimaoca:{
        type : String,
        default : 'JMBG_EBS',
        enum : EnumServ.IdentZadrugara
    },
    Jmbg:{ type: String},
    Adresa:{ 
        AdUlica:   { type: String, required: [true,'Ulica je obavezan podatak !!!'] }, 
        AdBroj:    { type: String },
        AdMesto:   { type: String },
        AdPttReon: { type: String },
        AdPttPak:  { type: String },
        AdDrzava:  { type: String }
        } ,
    BrLK:{ type: String},
    Telefon:{ type: String},
    ZadEmail:{ type: String},
    MestaID:{type:Schema.ObjectId, ref:"sfMesta", required:true},
    ZanimanjaID:{type:Schema.ObjectId, ref:"sfZanimanja", required:true },
    TipZadrugar:{    
        type : String,
        default : 'Ucenik',
        enum : EnumServ.TipZadrugar
    },
    BrRadneKnjiz:{ type: String},
    BrIndexa:{ type: String},
    TipIsplate:{ 
        type : String,
        default : 'Gotovina',
        enum : EnumServ.TipIsplate
    },
    BankaID:{type:Schema.ObjectId, ref:"sfBanke"},
    BrojRacuna:{ type: String},
    BeliBroj:{ type: String},
    BrojDana:{ type: Number,default:0},
    Slika:{ type: String},
    Opis:{ type: String },
    NameUser: {type:String}
    },
    {
    timestamps: { createdAt: 'created_at' }
    },
    { 
    retainKeyOrder: true 
    }
);



// sfZadrugar.pre('save', function(next) {
//     // do stuff
//     console.log("PRE SAVE zadrugar");
//     next();
//   });



const collectionName = 'sfZadrugar';

module.exports = mongoose.model('sfZadrugar', sfZadrugar,'sfZadrugar'); 


