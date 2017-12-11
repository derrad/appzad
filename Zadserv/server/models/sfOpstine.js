const mongoose = require('mongoose');
const Drzave = require('./sfDrzave');
const Schema = mongoose.Schema;

const sfOpstine = new Schema({
	Drzava: {
		type: Schema.ObjectId,
		ref: 'sfDrzave',
		required: true
	},
	DrzavaRef: {
		type: Object
	},
	RegOzn: {
		type: String,
		required: [true, 'Oznaka je obavezna !!!'],
		trim: true
	},
	Naziv: {
		type: String,
		required: [true, 'Naziv je obavezan !!!'],
		trim: true
	},
	SifPorez: {
		type: String,
		trim: true
	},
	KontBr: {
		type: String,
		trim: true
	},
	PozivNaBr: {
		type: String,
		trim: true
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
});


sfOpstine.pre('save', function (next) {
	// do stuff
	const self = this;
	Drzave.findById(this.Drzava).exec(function (err, drzava) {
		if (err) {
			self.DrzavaRef = {
				_id: null,
				name: null
			};
		}
		//console.log("PartnerRef - pre save"  + JSON.stringify(this.PartnerRef));
		if (drzava) {
			self.DrzavaRef = {
				_id: drzava._id,
				name: drzava.Naziv
			};
		} else {
			self.DrzavaRef = {
				_id: null,
				name: null
			};
		}
		next();
	});

	//    console.log("sfOpstine PRE SAVE");
});

sfOpstine.set('toJSON', {
	virtuals: true
});
module.exports = mongoose.model('sfOpstine', sfOpstine, 'sfOpstine');