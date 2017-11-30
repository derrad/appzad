const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Opstine = require('./sfOpstine');
const Drzave = require('./sfDrzave');

const Schema = mongoose.Schema;

const sfMesta = new Schema({
   Opstina: { type:Schema.ObjectId, ref:"sfOpstine", required:true },
   OpstinaRef: {type:Object},
   DrzavaRef: {type:Object},
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'], trim: true },
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


sfMesta.pre('save', function(next) {
    // do stuff
    self = this;
    Opstine.findById(this.Opstina).exec(function(err, opstina){
        if(err){ 
            self.OpstinaRef ={_id : null, name : null}
        }
       
        if (opstina){
            self.OpstinaRef = {_id : opstina._id, name : opstina.Naziv}
            // console.log(" - pre save"  + opstina._id );
        }else{
            self.OpstinaRef ={_id : null, name : null}
        }

        Drzave.findById(opstina.Drzava).exec(function(err, drzava){
            if(err){ 
                self.DrzavaRef ={_id : null, name : null}
            }
            if (drzava){
                self.DrzavaRef = {_id : drzava._id, name : drzava.Naziv}
            }else{
                self.DrzavaRef ={_id : null, name : null}
            }
            next();
        });


        //next();
    });

//    console.log("sfOpstine PRE SAVE");
});

sfMesta.set('toJSON', { virtuals: true })

module.exports = mongoose.model('sfMesta', sfMesta, 'sfMesta');