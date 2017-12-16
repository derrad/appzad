const mongoose = require('mongoose');
const Mesta = require('./sfMesta');
const Zanimanja = require('./sfZanimanja');
const EnumServ = require('../enum/serverenum');

const Schema = mongoose.Schema;

//unique: true,
const sfZadrugar = new Schema({
	IDZadrugar: {
		type: Number,
		unique: true,
		required: [true, 'ID numericki je obavezan!!!'],
		default: 0
	},
	Ime: {
		type: String,
		required: [true, 'Ime je obavezno !!!']
	},
	Prezime: {
		type: String,
		required: [true, 'Prezime je obavezno !!!']
	},
	ImeRoditelja: {
		type: String
	},
	DatRodjenja: {
		type: Date,
		default: Date.now,
		required: [true, 'Datum je obavezan !!!']
	},
	Aktivan: {
		type: Boolean,
		default: false
	},
	Pol: {
		type: String,
		default: 'Neodredjen',
		enum: EnumServ.PolZadruga
	},
	OpstinaRodj: {
		type: String
	},
	MestoRodj: {
		type: String
	},
	VrstaIdentifikatoraPrimaoca: {
		type: String,
		default: 'JMBG_EBS',
		enum: EnumServ.IdentZadrugara
	},
	Jmbg: {
		type: String
	},
	Adresa: {
		AdUlica: {
			type: String,
			required: [true, 'Ulica je obavezan podatak !!!']
		},
		AdBroj: {
			type: String
		},
		AdMesto: {
			type: String
		},
		AdPttReon: {
			type: String
		},
		AdPttPak: {
			type: String
		},
		AdDrzava: {
			type: String
		}
	},
	BrLK: {
		type: String
	},
	Telefon: {
		type: String
	},
	ZadEmail: {
		type: String
	},
	MestaID: {
		type: Schema.ObjectId,
		ref: 'sfMesta',
		required: true
	},
	MestaRef: {
		type: Object
	},
	ZanimanjaID: {
		type: Schema.ObjectId,
		ref: 'sfZanimanja',
		required: true
	},
	ZanimanjaRef: {
		type: Object
	},
	TipZadrugar: {
		type: String,
		default: 'Ucenik',
		enum: EnumServ.TipZadrugar
	},
	BrRadneKnjiz: {
		type: String
	},
	BrIndexa: {
		type: String
	},
	TipIsplate: {
		type: String,
		default: 'Gotovina',
		enum: EnumServ.TipIsplate
	},
	BankaID: {
		type: Schema.ObjectId,
		ref: 'sfBanke'
	},
	BrojRacuna: {
		type: String
	},
	BeliBroj: {
		type: String
	},
	BrojDana: {
		type: Number,
		default: 0
	},
	Slika: {
		type: String
	},
	Opis: {
		type: String
	},
	NameUser: {
		type: String
	}
}, {
	timestamps: {
		createdAt: 'created_at'
	}
}, {
	retainKeyOrder: true
});



// sfZadrugar.pre('save', function(next) {
//     // do stuff
//     console.log("PRE SAVE zadrugar");
//     next();
//   });


sfZadrugar.virtual('fullName').
	get(function () {
		return this.Ime + ' ' + this.Prezime;
	} ).
	set(function (v) {
		this.Ime = v.substr(0, v.indexOf(' '));
		this.Prezime = v.substr(v.indexOf(' ') + 1);
	});

sfZadrugar.set('toJSON', {
	virtuals: true
});


sfZadrugar.pre('save', function (next) {
	// do stuff
	const self = this;
	Mesta.findById(this.MestaID).exec(function (err, mesta) {
		if (err) {
			self.MestaRef = {
				_id: null,
				name: null
			};
		}
		if (mesta) {
			self.MestaRef = {
				_id: mesta._id,
				name: mesta.Naziv
			};
			// console.log(" - pre save"  + opstina._id );
		} else {
			self.MestaRef = {
				_id: null,
				name: null
			};
		}

		Zanimanja.findById(self.ZanimanjaID).exec(function (err, zanim) {
			if (err) {
				self.ZanimanjaRef = {
					_id: null,
					name: null
				};
			}
			if (zanim) {
				self.ZanimanjaRef = {
					_id: zanim._id,
					name: zanim.Naziv
				};
			} else {
				self.ZanimanjaRef = {
					_id: null,
					name: null
				};
			}
			next();
		});


		//next();
	});

	//    console.log("sfOpstine PRE SAVE");
});


module.exports = mongoose.model('sfZadrugar', sfZadrugar, 'sfZadrugar');