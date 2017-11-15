const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const sfOpstine = require('../models/sfOpstine');

const Schema = mongoose.Schema;

const sfMesta = new Schema({
   //Opstina: { type:Schema.ObjectId, ref:"Opstina", childPath:"child" } ,unique: true,
   Opstina: { type:Schema.ObjectId, ref:"sfOpstine", required:true },
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   Ptt:{type:String,trim: true},
   Opis  :{ type: String,trim: true },
   NameUser: {type:String,trim: true}

},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}
);

sfMesta.index({Opstina: 1, Naziv: 1}, {unique: true});

//  sfMesta.virtual('nazivOpstine', {
//      ref: 'sfOpstine', // The model to use
//      localField: 'Opstina.Naziv', // Find people where `localField`
//      foreignField: 'Naziv', // is equal to `foreignField`
//      // If `justOne` is true, 'members' will be a single doc as opposed to
//      // an array. `justOne` is false by default.
//      justOne: true
//    });

//sfMesta.plugin(relationship, { relationshipPathName:'Opstina' });
//var child = new sfMesta({Opstina:Opstina._id});


module.exports = mongoose.model('sfMesta', sfMesta, 'sfMesta');