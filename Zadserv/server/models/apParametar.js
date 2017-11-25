const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate');

 const Schema = mongoose.Schema ; 
 //,//  ID  = Schema.ObjectId;


const apParametar = new Schema({
   Naziv : { type: String, 
                required: [true, 'Naziv je obavezan !!!'],
                uppercase: true,
                unique: true,
                trim: true, 
                match : [
                        new RegExp('^[a-z0-9_-]+$', 'i'),
                        '{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore.'
                        ],
                minlength:[3,"Minimalna duzina 3 karaktera"],
                maxlength:[25,"Maksimalna duzina 25 karaktera"]
   },
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
 );


// apParametar.plugin(mongoosePaginate);

module.exports = mongoose.model('apParametar', apParametar,'apParametar');