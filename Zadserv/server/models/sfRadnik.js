const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sfRadnik = new Schema({
	SifraRad: {
		type: String,
		required: [true, 'Sifra radnika je obavezna !!!'],
		unique: true,
		trim: true,
		match: [
			new RegExp('^[a-z0-9_-]+$', 'i'),
			'{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore.'
		],
		minlength: [4, 'Minimalna duzina 4 karaktera'],
		maxlength: [12, '"Maksimalna duzina 12 karaktera']
	},
	Ime: {
		type: String,
		required: [true, 'Ime je obavezno !!!'],
		trim: true
	},
	Prezime: {
		type: String,
		required: [true, 'Prezime je obavezno !!!'],
		trim: true
	},
	Jmbg: {
		type: String,
		trim: true
	},
	Aktivan: {
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
	}
}, {
	timestamps: {
		createdAt: 'created_at'
	}
}, {
	retainKeyOrder: true
}
);

sfRadnik.virtual('fullName').get(function () {
	return this.Ime + ' ' + this.Prezime;
});

// sfRadnik.pre('save', function(next) {
//    console.log("PRE SAVE RADNIK");
//    next();
//  });
sfRadnik.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('sfRadnik', sfRadnik, 'sfRadnik');