const mongoose = require('mongoose');
const FondSati = require('../models/sfFondSati');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');
const AppError = require('../error/AppError');
const PostDataTakenError = require('../error/postdataerror');
const RequestValidationError = require('../error/RequestValidationError');
const TIP_TRANS_INSERT = 'ADD FOND SATI';
const TIP_TRANS_UPDATE = 'CHANGES FOND SATI';
const TIP_TRANS_DEL = 'DELETE FOND SATI';



module.exports.create = function (req, res, next) {
	const uid = req.params.id;
	var Mesec = req.body.Mesec || new Date().getMonth() + 1;
	const Godina = req.body.Godina || new Date().getFullYear();
	const Sati = req.body.Sati;
	const MinOsnov = req.body.MinOsnov;
	const MaxOsnov = req.body.MaxOsnov;
	const Opis = req.body.Opis;
	const NameUser = req.user.email || 'System';

	//console.log("uid je :" + uid + " ovo je Mesec " + req.body.Mesec);
	// console.log("Sati :" + Sati + " ovo je Mesec " + Mesec + " ovo je godina" + Godina) ;
	//Mesec = null;
	if (!Sati || !Mesec || !Godina || !MinOsnov || !MaxOsnov) {
		// console.log("vracam gresku");
		return res.status(422).send({
			success: false,
			message: 'Posted data is not correct or incompleted.',
			data: []
		});
	} else {
		if (uid) {
			//Edit Fond sati
			FondSati.findById(uid).exec(function (err, fondsati) {
				if (err) {
					return res.status(400).json({
						success: false,
						message: 'Error processing request ' + err,
						data: []
					});
				}

				if (fondsati) {
					fondsati.Mesec = Mesec;
					fondsati.Godina = Godina;
					fondsati.Sati = Sati;
					fondsati.MinOsnov = MinOsnov;
					fondsati.MaxOsnov = MaxOsnov;
					fondsati.Opis = Opis;
					fondsati.NameUser = NameUser;

					fondsati.save(function (err, results) {
						if (err) {
							return res.status(400).json({
								success: false,
								message: 'Error processing request ' + err,
								data: []
							});
						}

						try {
							SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, uid, Mesec + '/' + Godina, NameUser);
						} catch (ex) {}

						return res.status(201).json({
							success: true,
							message: 'Fond Sati updated successfully',
							data: results
						});
					});
				}

			});

		} else {

			// Add new FondSati
			let oFondSati = new FondSati({
				Mesec: Mesec,
				Godina: Godina,
				Sati: Sati,
				MinOsnov: MinOsnov,
				MaxOsnov: MaxOsnov,
				Opis: Opis,
				NameUser: NameUser
			});

			oFondSati.save(function (err, result) {
				if (err) {
					return res.status(400).json({
						success: false,
						message: 'Error processing request ' + err,
						data: []
					});
				}

				try {
					SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, result._id, Mesec + '/' + Godina, NameUser);
				} catch (ex) {}

				return res.status(201).json({
					success: true,
					message: 'Fond sati saved successfully',
					data: result

				});
			});
		} //if (uid) and else n

	} // if (!Sati || !Mesec || Godina )

}; //module.exports.create



module.exports.listfondsati = function (req, res, next) {
	//console.log("Usao u list fond sati");

	//FondSati.find({}).sort({created_at:-1}).exec(function(err, result){
	FondSati.find({}).sort({
		Godina: 1,
		Mesec: 1
	}).exec(function (err, result) {

		//  try{
		//     throw new PostDataTakenError();
		//     }catch(err){
		//          return res.status(400).json({ success: false, message: 'Error processing request '+ err.message, data:[] });
		//   }

		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Error processing request ' + err,
				data: []
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Successfully',
			data: result
		});

	});

};


module.exports.getfondsati = function (req, res, next) {
	//console.log("Usao u get fond sati parametar je  " + req.params.id);
	FondSati.find({
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
			message: 'Successfully',
			data: result
		});
	});

};

module.exports.delefondsati = function (req, res, next) {
	// console.log("delete fond sati parametar je : " + req.params.id);
	// const uid = req.params.id || '1234';
	FondSati.remove({
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
			SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + ' Fond sati', req.user.email);
		} catch (ex) {}

		return res.status(201).json({
			success: true,
			message: 'Fond sati removed successfully',
			data: null
		});
	});
};