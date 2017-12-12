const mongoose = require('mongoose');
const Zanimanja = require('../models/sfZanimanja');
const Zadrugar = require('../models/sfZadrugar');
const LogAct = require('../models/apActlog');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');


const TIP_TRANS_INSERT = 'ADD ZANIMANJA';
const TIP_TRANS_UPDATE = 'CHANGES ZANIMANJA';
const TIP_TRANS_DEL = 'DELETE ZANIMANJA';

module.exports.create = function (req, res, next) {
	const uid = req.params.id;
	const Sifra = req.body.Sifra;
	const Naziv = req.body.Naziv;
	const StepenSS = req.body.StepenSS;
	const Opis = req.body.Opis;
	const NameUser = req.user.email || 'System';

	if (!Naziv || !StepenSS || !Sifra) {
		return res.status(422).send({
			success: false,
			message: 'Posted data is not correct or incompleted.',
			data: []
		});
	} else {

		if (uid) {
			//Edit zanimanja
			Zanimanja.findById(uid).exec(function (err, zanimanja) {
				if (err) {
					return res.status(400).json({
						success: false,
						message: 'Error processing request ' + err,
						data: []
					});
				}

				if (zanimanja) {
					zanimanja.Sifra = Sifra;
					zanimanja.Naziv = Naziv;
					zanimanja.StepenSS = StepenSS;
					zanimanja.Opis = Opis;
					zanimanja.NameUser = NameUser;

				}
				zanimanja.save(function (err, results) {
					if (err) {
						return res.status(400).json({
							success: false,
							message: 'Error processing request ' + err,
							data: []
						});
					}
					try {
						const updSlog = Sifra + ' ' + Naziv + '  ' + StepenSS;
						SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, updSlog, NameUser);
					} catch (ex) {}
					return res.status(201).json({
						success: true,
						message: 'Zanimanja updated successfully',
						data: results
					});
				});
			});

		} else {

			// Add new Zanimanje
			let oZanimanja = new Zanimanja({
				Sifra: Sifra,
				Naziv: Naziv,
				StepenSS: StepenSS,
				Opis: Opis,
				NameUser: NameUser
			});

			oZanimanja.save(function (err, result) {
				if (err) {
					return res.status(400).json({
						success: false,
						message: 'Error processing request ' + err,
						data: []
					});
				}
				try {
					const NoviSlog = Sifra + ' ' + Naziv + ' ' + StepenSS;
					SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, NoviSlog, NameUser);
				} catch (ex) {}

				return res.status(201).json({
					success: true,
					message: 'Zanimanje saved successfully',
					data: result

				});
			});

		}
	}
};



module.exports.listzanimanja = function (req, res, next) {
	// console.log("Usao u list zanimanja");

	Zanimanja.find({}).sort({
		created_at: -1
	}).exec(function (err, result) {
		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Error processing request ' + err,
				data: []
			});
		}
		return res.status(200).json({
			success: true,
			data: result
		});
	});

};


module.exports.getzanimanja = function (req, res, next) {
	//console.log("Usao u get Zanimanja " + req.params.id);
	Zanimanja.find({
		_id: req.params.id
	}).exec(function (err, result) {
		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Error processing request ' + err,
				data: []
			});
		}
		return res.status(200).json({
			success: true,
			data: result
		});
	});

};

module.exports.delezanimanja = function (req, res, next) {
	// console.log("delete  zanimanja parametar je : " + req.params.id);

	Zadrugar.count({
		ZanimanjaID: req.params.id
	}, function (err, count) {
		//console.log("DA VIDIM COUNT" +  count);
		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Error processing request ' + err,
				number: 0
			});
		}
		// console.log('Zadrugari koji imaju ovo zanimanje  : ' + count);
		if (count > 0) {
			return res.status(200).json({
				success: false,
				message: 'Zanimanje not removed successfully, relation is used with this ID',
				data: []
			});
		} else {
			Zanimanja.remove({
				_id: req.params.id
			}, function (err) {
				if (err) {
					return res.status(400).json({
						success: false,
						message: 'Error processing request ' + err,
						data: []
					});
				}
				try {
					SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + ' Zanimanja', req.user.email);
				} catch (ex) {}
				return res.status(201).json({
					success: true,
					message: 'Zanimanje removed successfully',
					data: []
				});
			});


		}


	});


};
