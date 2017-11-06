const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sfKonstanta = new Schema({
    Datum:{type:Date, default: Date.now,required: [true, 'Datum je obavezan !!!']},
    UcPenz:{ type: Number,default:0,required:true},
    UcZdrav:{ type: Number,default:0,required:true},
    UcNormTr:{ type: Number,default:0,required:true},
    UcOlak:{ type: Number,default:0,required:true},
    UcPorez:{ type: Number,default:0,required:true},
    Pdv:{ type: Number,default:0,required:true},
    Clanarin:{ type: Number,default:0,required:true},
    OsPorez:{ type: Number,default:0,required:true},
    OsUmanjen:{ type: Number,default:0,required:true},
    OsPio1:{ type: Number,default:0,required:true},
    OsPio2:{ type: Number,default:0,required:true},
    OsZdrav1:{ type: Number,default:0,required:true},
    OsZdrav2:{ type: Number,default:0,required:true},
    OsNez1:{ type: Number,default:0,required:true},
    OsNez2:{ type: Number,default:0,required:true},
    OsMinOsDop:{ type: Number,default:0,required:true},
    OsMaxOsDop:{ type: Number,default:0,required:true},
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

// // sfKonstanta.pre('save', function(next) {
// //    // do stuff
// //    console.log("sfKonstanta PRE SAVE");
// //    next();
// //  });


module.exports = mongoose.model('sfKonstanta', sfKonstanta,'sfKonstanta');




