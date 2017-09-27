var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;


var apParametar = new Schema({
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   Koristi: {type:Boolean, default:false},
   VredString: {type: String },
   VredNumeric:{type:Number,default:0},
   Opis  :{ type: String },
   NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
 }
 //,
// {
//     collection : 'apParametar'
// }
);
//apParametar.set('collection', 'apParametar');

 apParametar.pre('save', function(next) {
         console.log("PARAM PRE SAVE");
         next();
//         error = apParametar.validateSync();
//         if(error){
//             error.CustomError ="Nisam ni otisao na server";
//             res.json(error); 

//         }  

 });
 
// var error = apParametar.validateSync();
// if(error){
//     error.CustomError ="Nisam ni otisao na server";
//     console.log(" u apParametar shemi pre poziva serveru  " + error.CustomError);
//   // res.json(error); 
// }  

apParametar.plugin(mongoosePaginate);

var collectionName = 'apParametar';

module.exports = mongoose.model('apParametar', apParametar,collectionName);