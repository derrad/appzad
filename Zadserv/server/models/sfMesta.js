var mongoose = require('mongoose');
//var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');
var sfOpstine = require('../models/sfOpstine');
//var sfDrzave = require('../models/sfDrzave');


 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfMesta = new Schema({
   //Opstina: { type:Schema.ObjectId, ref:"Opstina", childPath:"child" },
   Opstina: { type:Schema.ObjectId, ref:"sfOpstine",required:true },
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] ,unique: true},
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

//  sfMesta.virtual('nazivOpstine', {
//      ref: 'sfOpstine', // The model to use
//      localField: 'Opstina.Naziv', // Find people where `localField`
//      foreignField: 'Naziv', // is equal to `foreignField`
//      // If `justOne` is true, 'members' will be a single doc as opposed to
//      // an array. `justOne` is false by default.
//      justOne: true
//    });

sfMesta.plugin(mongoosePaginate);
//sfMesta.plugin(relationship, { relationshipPathName:'Opstina' });
//var child = new sfMesta({Opstina:Opstina._id});
var collectionName = 'sfMesta';

module.exports = mongoose.model('sfMesta', sfMesta, collectionName);