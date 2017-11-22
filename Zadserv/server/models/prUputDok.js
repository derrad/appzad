const mongoose = require('mongoose');
//const sfPosao = require('./server/models/sfPosao');
//const sfPartneri = require('./server/models/sfPartneri');
const EnumServ = require('../enum/serverenum');



var Schema = mongoose.Schema;

var prUputDok = new Schema({
    PartneriID:{type:Schema.ObjectId, ref:"sfPartner", required:true },
    TipDok:{ type: String, default:"UPUT", required:true},
    Datum:{type:Date, default: Date.now ,required:true},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    Broj:{ type: Number,default:1, required:true},
    Godina:{ type: Number,default:Date.now.year, required:true},
    RacVlasnika:{ type:{Naziv:{type:String} , Racun:{type:String}}, require:true} ,
    PosloviID:{type:Schema.ObjectId, ref:"sfPosao", required:true },
    Stavke:[{
        IDZadrugar:{ type: Number,default:0,required:true},
        Rbr:{ type: Number,default:1,required:true},
        ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar",required:true,unique: true},
        TipZadrugar:{type : String,default : 'Ucenik',enum : EnumServ.TipZadrugar},
        PosloviID:{type:String,required:true },
        OdDatuma:{type:Date},
        DoDatuma:{type:Date},
        Kolicina:{ type: Number,default:1},
        JedMer:{ type: String},
        Cena:{ type: Number,default:0},
        Opis:{ type: String }
     }],
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

prUputDok.path('Stavke').validate(function(v) {
    if(!v){return false}
    else if(v.length === 0){return false}
    return true;
},'Update needs to have at least one stavku');

// Adding validation to a Schema with an array in an array
// CarSchema.path('features').schema.path('model').schema.path('year').validate(function(features){
//     if(!features){return false}
//     else if(features.length === 0){return false}
//     return true;
// }, 'Car needs to have at least one feature');


module.exports = mongoose.model('prUputDok', prUputDok,'prUputDok');


