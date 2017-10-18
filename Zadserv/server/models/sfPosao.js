var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var EnumSS = require('../enum/serverenum');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfPosao = new Schema({
   Naziv : {  type:String,trim:true,required: [true, 'Naziv je obavezan !!!'],unique: true},
   StepenSS  :  {
                 type : String,
                 required: [true, 'StepenSS je obavezan !!!'],
                 default : 'Nekvalifikovan',
                 enum : EnumSS.StepenSS //['Nekvalifikovan', 'Polukvalifikovan', 'Kvalifikovan','Srednja Strucna Sprema','VKV','Visa skola','Fakultet','Magistar','Doktor Nauka']
                },
   Skola  :{ type: String,trim: true  },
   Sifra   :{ type: String,trim: true  },
   Sifra1   :{ type: String,trim: true },
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


//  sfPosao.pre('save', function(next) {
//    // do stuff
//    console.log("PRE SAVE POSAO");
//   next();
// });

 sfPosao.plugin(mongoosePaginate);
//  var collectionName = 'sfPosao';

module.exports = mongoose.model('sfPosao', sfPosao,'sfPosao');


// Naziv : {  type:String,
//   required: [true, 'Naziv je obavezan !!!'],
//   unique: true,
//   trim: true, 
//   match : [
//           new RegExp('^[a-z0-9_-]+$', 'i'),
//           '{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore.'
//           ],
//   minlength:[3,"Minimalna duzina 3 karaktera"],
//   maxlength:[100,"Maksimalna duzina 100 karaktera"]},


// <option value="1">Nekvalifikovan</option>  PosaoID: ID,
// <option value="2">Polukvalifikovan</option>
// <option value="3">Kvalifikovan</option>
// <option value="4">Srednja Strucna Sprema</option>
// <option value="5">VKV</option>
// <option value="6">Visa skola</option>
// <option value="7">Fakultet</option>
// <option value="8">Magistar</option>
// <option value="9">Doktor Nauka</option>

// var mongoose = require('./index')
// , TempSchema = new mongoose.Schema({
// salutation: {type: String, enum: ['Mr.', 'Mrs.', 'Ms.']}
// });

// var Temp = mongoose.model('Temp', TempSchema);

// console.log(Temp.schema.path('salutation').enumValues);
// var temp = new Temp();
// console.log(temp.schema.path('salutation').enumValues);
