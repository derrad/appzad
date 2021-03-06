const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sfDrzave = new Schema({
	KodDrzave: {
		type: String,
		required: [true, 'Kod je obavezan !!!'],
		uppercase: true,
		unique: true,
		trim: true,
		match: [
			new RegExp('^[a-z0-9_-]+$', 'i'),
			'{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore.'
		],
		minlength: [1, 'Minimalna duzina 1 karaktera'],
		maxlength: [3, 'Maksimalna duzina je 3 karaktera']
	},
	Naziv: {
		type: String,
		required: [true, 'Naziv je obavezan !!!'],
		unique: true,
		trim: true,
		minlength: 1
	},
	EuClan: {
		type: Boolean,
		default: false
	},
	Opis: {
		type: String,
		trim: true
	},
	NameUser: {
		type: String,
		trim: true
	},
}, {
	timestamps: {
		createdAt: 'created_at'
	}
}, {
	retainKeyOrder: true
}

);

sfDrzave.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('sfDrzave', sfDrzave, 'sfDrzave'); 

// sfDrzave.pre("save", function(next) {
//     var self = this;
//     console.log("PRE SAVE sfdrzave");
//     self.local_error = false;

//     // if (self.isNew){
//     //     console.log("PRE SAVE sfdrzave - isNew i pucam error");
//     //     var err = new Error("Nema novih Drzave");
//     //     next(err);
//     // }
//     // next();


//     mongoose.model('sfDrzave', sfDrzave, collectionName).findOne({KodDrzave : self.KodDrzave}, 'KodDrzave Naziv Opis', function(err, results) {
//          if(err) {
//           //  self.local_error = true;
//              next(err);
//          } else if(results) {
// //            self.local_error =true;
//              console.warn('KOD DRZAVE results', results);
//              self.invalidate("KodDrzave", "KodDrzave must be unique");
//              var koderr = new Error("KodDrzave must be unique");
//              next(koderr);
//          }else{next();}  
//      });
//      mongoose.model('sfDrzave', sfDrzave, collectionName).findOne({Naziv : self.Naziv}, 'KodDrzave Naziv Opis', function(err, results) {
//         if(err) {
//            // self.local_error = true;
//             next(err);
//         } else if(results) {
//            //self.local_error = true;
//             console.warn('NAZIV results', results);
//             self.invalidate("Naziv", "Naziv must be unique");
//             var nazerr = new Error("Naziv must be unique");
//             next(nazerr);
//         }else{next();} 
//     });

//    //console.log("local_error je " + self.local_error.toString());

//     // if(self.local_error===false){
//     //     console.log("Zovem prazno bez error");
//     //     next();
//     // }

// });

// sfDrzave.pre('validate', function(next){
//     console.log("pre validate called");
//     next();
// });

// sfDrzave.post('validate', function(next){
//     console.log("post validate called");
//     //next();
// });

//var collectionName = 'sfDrzave';
//sfDrzave.plugin(mongoosePaginate);