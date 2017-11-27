const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var sfBanke = new Schema({
   Naziv: {type: String, required: [true, 'Naziv je obavezan !!!'], unique: true, trim: true, minlength:1},
   Racun: {type: String, required: [true, 'Racun je obavezan !!!'], minlength:1, trim:true},
   Aktivan: {type:Boolean, default:false},
   Opis: {type: String,trim:true },
   NameUser: {type:String,trim:true},
 },
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}

);
module.exports = mongoose.model('sfBanke', sfBanke,'sfBanke');