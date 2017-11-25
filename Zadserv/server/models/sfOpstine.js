var mongoose = require('mongoose');
var sfDrzave = require('../models/sfDrzave');

var Schema = mongoose.Schema ;//,

var sfOpstine = new Schema({
   Drzava: {type:Schema.ObjectId, ref:'sfDrzave', required:true},
   DrzavaRef: {type:Object},
   RegOzn: {type:String,required: [true, 'Oznaka je obavezna !!!'],trim: true},
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'],trim: true },
   SifPorez : {type: String,trim: true},
   KontBr : { type: String,trim: true},
   PozivNaBr: {type: String,trim: true},
   Opis: {type: String ,trim: true},
   NameUser: {type:String,trim: true}

},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}
);
//sfOpstine.plugin(relationship, { relationshipPathName:'Drzava' });

// sfOpstine.pre('save', function(next) {
//     // do stuff
//     console.log("sfOpstine PRE SAVE");
//     next();
// });

//var Child = new sfOpstine({Drzava:Drzava._id});

//sfOpstine.plugin(mongoosePaginate);

var collectionName = 'sfOpstine';
module.exports = mongoose.model('sfOpstine', sfOpstine,collectionName);
