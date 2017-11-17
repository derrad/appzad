const mongoose = require('mongoose');
//const sfPosao = require('./server/models/sfPosao');
//const sfPartneri = require('./server/models/sfPartneri');
const EnumServ = require('../enum/serverenum');



var Schema = mongoose.Schema;

var prUputDok = new Schema({
    PartneriID:{type:Schema.ObjectId, ref:"sfPartneri", required:true },
    TipDok:{ type: String, default:"UPUT", required:true},
    Datum:{type:Date, default: Date.now ,required:true},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    Broj:{ type: Number,default:1, required:true},
    Godina:{ type: Number,default:Date.now.year, required:true},
    RacVlasnika:{ Naziv:{type:String} , Racun:{type:String} },
    PosloviID:{type:Schema.ObjectId, ref:"sfPosao",required:true},
    Stavke:[{
        IDZadrugar:{ type: Number,default:0},
        Rbr:{ type: Number,default:1},
        ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar"},
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

module.exports = mongoose.model('prUputDok', prUputDok,'prUputDok');


