const mongoose = require('mongoose');
const EnumServ = require('../enum/serverenum');
const Partneri = require('./sfPartneri');
const Poslovi = require('./sfPosao');

const Schema = mongoose.Schema;

const prUputDok = new Schema({
    PartneriID:{type:Schema.ObjectId, ref:"sfPartner", required:true },
    PartnerRef : {type:Object, default:null},
    TipDok:{ type: String, default:"UPUT", required:true,trim:true },
    Datum:{type:Date, default: Date.now ,required:true},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    Broj:{ type: Number,default:1, required:true},
    Godina:{ type: Number,default:Date.now.year, required:true},
    RacVlasnika:{ type:{Naziv:{type:String} , Racun:{type:String}}, require:true} ,
    PosloviID:{type:Schema.ObjectId, ref:"sfPosao", required:true },
    PosloviRef:{type:Object, default:null},
    Stavke:[ {
        IDZadrugar:{ type: Number,default:0,required:true},
        Rbr:{ type: Number,default:1,required:true},
        ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar",required:true},
        //ZadrugarID: {type:Object, required:true},
        ZadRef : { type:Object ,required:true},
        TipZadrugar:{type : String,default : 'Ucenik',enum : EnumServ.TipZadrugar},
       // PosloviID:{type:String,required:true },
        PosloviID:{ type:Schema.ObjectId, ref:"sfPosao",required:true},
        PosloviRef:{type:Object,required:true},
        OdDatuma:{type:Date},
        DoDatuma:{type:Date},
        Kolicina:{ type: Number,default:1},
        JedMer:{ type: String, trim:true },
        Cena:{ type: Number,default:0},
        Opis:{ type: String, trim:true }
     } ] ,
    Opis:{ type: String, trim:true },
    NameUser: {type:String, trim:true}
    },
    {
    timestamps: { createdAt: 'created_at' }
    },
    { 
    retainKeyOrder: true 
    }
);

prUputDok.index({Broj: 1, Godina: 1}, {unique: true});

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

prUputDok.pre('save', function(next) {
    self = this;

    //console.log("Partner ID - pre save"  + this.PartneriID);
    Partneri.findById(this.PartneriID).exec(function(err, partner){
        if(err){ 
            self.PartnerRef ={_id : null, name : null,adresa:null}
        }
        if(partner){
            self.PartnerRef = {_id : partner._id, name : partner.Naziv,adresa: partner.Adresa}
        } else{
            self.PartnerRef ={_id : null, name : null,adresa:null}
        }

        Poslovi.findById(self.PosloviID).exec(function(err, posao){
            if(err){ 
                self.PosloviRef ={_id : null, name : null, stepenss:null}
            }
            if (posao){
                self.PosloviRef = {_id : posao._id, name : posao.Naziv, stepenss: posao.StepenSS}
            } else{
                self.PosloviRef ={_id : null, name : null, stepenss:null}
            }
            next();
        });

    });
  
  });



module.exports = mongoose.model('prUputDok', prUputDok,'prUputDok');



