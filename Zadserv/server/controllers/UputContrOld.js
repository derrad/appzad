const mongoose = require('mongoose');
const Zadrugar = require('../models/sfZadrugar');
const Uput = require('../models/prUputDok');
const TypeA = require('../enum/serverenum');
const SetActivity = require('./SetActivity');

const TIP_TRANS_INSERT = 'ADD UPUT';
const TIP_TRANS_UPDATE = 'CHANGES UPUT';
const TIP_TRANS_DEL = 'DELETE UPUT';

module.exports.create = function (req, res, next) {
	const uid = req.params.id;
	const PartneriID = req.body.PartneriID;
	const TipDok = req.body.TipDok || 'UPUT';
	const Datum = req.body.Datum || new Date();
	const Knjizeno = req.body.Knjizeno || false;
	const Storno = req.body.Storno || false;
	const Broj = req.body.Broj;
	const Godina = req.body.Godina;
	const RacVlasnika = req.body.RacVlasnika;
	const PosloviID = req.body.PosloviID;
	const Stavke = req.body.Stavke;
	const Opis = req.body.Opis;
	const NameUser = req.user.email || 'System';



	if (!PartneriID || !TipDok || !Datum || !Broj || !PosloviID || !Stavke) {
		// res.statusMessage='Posted data is not correct or incompleted.';
		return res.status(422).send({
			success: false,
			message: 'Posted data is not correct or incompleted.',
			data: []
		}).end();
	} else {

		if (uid) {
			//Edit partner
			Uput.findById(uid).exec(function (err, uput) {
				if (err) {
					// console.log("nema nema !!!");
					// res.statusMessage = err;
					return res.status(400).json({
						success: false,
						message: 'Error processing request ',
						data: []
					}).end();
				}
				// res.statusMessage = "RALE - Current password does not match";
				//return res.status(400).json({ success: false, message: 'RALE - Hocu ovu gresku', data:[] }); 

				if (uput) {

					uput.PartneriID = PartneriID;
					uput.TipDok = TipDok;
					uput.Datum = Datum;
					uput.Knjizeno = Knjizeno;
					uput.Storno = Storno;
					uput.Broj = Broj;
					uput.Godina = Godina;
					uput.RacVlasnika = RacVlasnika;
					uput.PosloviID = PosloviID;
					uput.Stavke = Stavke;
					uput.Opis = Opis;
					uput.NameUser = NameUser;

				}
				uput.save(function (err, result) {
					if (err) {
						//console.log("GRESKA UPDATE -" + err);
						//res.statusMessage = err;
						return res.status(400).
							json({
								success: false,
								message: 'Error processing request ' + err,
								data: []
							}).end();
					}

					try {
						SetActivity.AddActivity(TypeA.Activities[1], TIP_TRANS_UPDATE, Broj, Broj + '/' + Godina, NameUser);
					} catch (ex) {}


					return res.status(201).json({
						success: true,
						message: 'Uput updated successfully',
						data: result
					});
				});
			});

		} else {
			//console.log("Usao u ADD" + " racun vlasnika " + RacVlasnika +  " Tip dokumenta je " + TipDok  ); 
			//let NoveStavke = GetSredStavke(Stavke);
			console.log('stavke save ' + JSON.stringify(Stavke));

			// Add new Uput
			let oUput = new Uput({
				PartneriID: PartneriID,
				TipDok: TipDok,
				Datum: Datum,
				Knjizeno: Knjizeno,
				Storno: Storno,
				Broj: Broj,
				Godina: Godina,
				RacVlasnika: RacVlasnika,
				PosloviID: PosloviID,
				Stavke: Stavke,
				Opis: Opis,
				NameUser: NameUser

			});

			oUput.save(function (err, result) {
				if (err) {
					// const emsg = " Error processing request";
					console.log(' Novi uput save ' + JSON.stringify(err));
					return res.status(400).json({
						success: false,
						message: JSON.stringify(err),
						data: []
					}).end();
				}
				try {
					SetActivity.AddActivity(TypeA.Activities[3], TIP_TRANS_INSERT, Broj, Broj + '/' + Godina, NameUser);
				} catch (ex) {}

				return res.status(201).json({
					success: true,
					message: 'Uput saved successfully',
					data: result
				});
			});

		}
	}
};

function GetSredStavke(tStavke) {
	const newStav = [];
	if (tStavke) {
		console.log(' Dobio sam na obradu' + JSON.stringify(tStavke));
	} else {
		console.log('Nema stavki');
	}
	tStavke.forEach(function (item) {
		const zadId = item.ZadrugarID;
		try {
			// getItemFormID(zadId).then(obj=>{
			//       console.log('THEN IMAM' + obj);
			//       item.ZadRef  = obj;
			//     }
			// ).catch(err=>{console.log(err)});
			//  const objZad = doSomething(zadId);
			//  item.ZadRef = objZad;
			//console.log('Zovem fukciju za populate zadrugara');
			PopulZadRef(zadId, function (objZad) {
				//do whatever
				item.ZadRef = objZad;
				console.log('Zovem fukciju za populate zadrugara' + JSON.stringify(objZad));
			});
			// const cursor = Zadrugar.findOne({_id : zadId }).cursor();
			// let doc = await cursor.next();

			// Zadrugar.findOne({_id : zadId }).exec().then(respone=>{
			//       console.log(" resone" + respone);
			//       item.ZadRef = respone;

			//   }).catch(err=>console.log(err))
			// let r = Zadrugar.findOne({_id : zadId }).exec(function(err, result){
			//     if(err){ 
			//        console.log('error u findOne');
			//       // callback(err);
			//       // return err;
			//     }else{
			//       console.log('Nema greska');
			//       item.ZadRef = result;
			//     // console.log('Upisujem referencu a funkcija je nasla ' +  JSON.stringify(result));
			//     //  callback(result);
			//       //return result;
			//     //  item.ZadRef = result;
			//     //  item.TipZadrugar = result.TipZadrugar;
			//     }
			//  });
			//   let upit = Zadrugar.findOne({_id : zadId });
			//console.log(!(upit instanceof require('mpromise')));
			//const result = await upit.exec();
			// upit.then(function (doc) {
			//   console.log("Usao u upit then");
			//   if (doc.TipZadrugar){
			//     item.ZadRef = doc;
			//   }
			// });

			// let upit = Zadrugar.find({_id : zadId }).sort({created_at:-1}).limit(1);
			// let stream = upit.tailable({ "awaitdata": true}).stream();
			// console.log("Pre strema on");
			// stream.on("data",function(data) {
			//   console.log(data);
			//   item.ZadRef = data;
			// });
			// let retValue = getZadr(zadId, function(returnValue){return returnValue;});
			// console.log("sta li sam dobio " + JSON.stringify(retValue));
			// if (retValue.TipZadrugar){
			//   item.ZadRef = retValue;
			//   item.TipZadrugar = retValue.TipZadrugar;
			// }

		} catch (err) {
			console.log('Error' + err);
		}


		newStav.push(item);
	});
	console.log('Vracam se ' + JSON.stringify(newStav));
	return newStav;
}

// async function doSomething(zadId){

//    //tStavke.forEach(function(item){
//     //const zadId = item.ZadrugarID;
//      let items= await Zadrugar.findOne({_id : zadId });
//      console.log(items);
//      return items;
//    //});

//   //return tStavke;

//   // Other code with variable items here ...
// }

// async function getItemFormID(zadId) {
//   var obj = await new Promise(function(resolve, reject) {
//       let items= Zadrugar.findOne({_id : zadId });
//       resolve(items);

//   });
//   return obj;
// }

// myFunction(query, function(returnValue) {
//   // use the return value here instead of like a regular (non-evented) return value
// });


//  async function getZadr(zadId, callback){
//    await  Zadrugar.findOne({_id : zadId }).exec(function(err, result){
//       if(err){ 
//          console.log('error u findOne');
//          callback(err);
//         // return err;
//       }else{
//         console.log('Nema greska');
//       // console.log('Upisujem referencu a funkcija je nasla ' +  JSON.stringify(result));
//         callback(result);
//         //return result;
//       //  item.ZadRef = result;
//       //  item.TipZadrugar = result.TipZadrugar;
//       }
//    });
// }





module.exports.listUput = function (req, res, next) {
	//console.log("Usao u list Radnik - tu sam");
	Uput.find({}).sort({
		created_at: -1
	}).populate('PartneriID').populate('PosloviID').populate('Stavke.ZadrugarID').exec(function (err, result) {
		if (err) {
			res.statusMessage = err;
			return res.status(400).json({
				success: false,
				message: 'Error processing request ',
				data: []
			}).end();
		}
		return res.status(200).json({
			message: 'Successfully',
			success: true,
			data: result
		});
	});

};

module.exports.getUput = function (req, res, next) {

	Uput.find({
		_id: req.params.id
	}).exec(function (err, result) {
		if (err) {
			return res.status(404).json({
				success: false,
				message: 'Error processing request ',
				data: []
			}).end();
		}

		return res.status(200).json({
			success: true,
			message: 'Uput find successfully',
			data: result
		});
	});

};

module.exports.deleUput = function (req, res, next) {
	Uput.remove({
		_id: req.params.id
	}, function (err) {
		if (err) {
			//res.statusMessage = err;
			const emsg = 'Error processing request';
			// if(err.errmsg){emsg = err.errmsg; }else{emsg = err; }
			return res.status(400).json({
				success: false,
				message: emsg,
				data: []
			}).end();
		}
		try {
			SetActivity.AddActivity(TypeA.Activities[5], TIP_TRANS_DEL, req.params.id, TypeA.Activities[5] + ' Uput', req.user.email);
		} catch (ex) {}
		return res.status(201).json({
			success: true,
			message: 'Uput removed successfully',
			data: []
		});
	});
};


module.exports.countUput = function (req, res, next) {
	//console.log("parametar je : " + req.params.id);
	Uput.count({}, function (err, count) {
		//console.log("DA VIDIM COUNT" +  count);
		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Error processing request ' + err,
				number: 0
			});
		}
		// console.log("VRACAM BROJ KOJI JE  : " + count);
		return res.status(200).json({
			success: true,
			message: 'Successfully',
			number: count
		});
	});
};


module.exports.getUputBrojGod = function (req, res, next) {
	//console.log(" pozivam getUputBrojGod " + req.body.Datum  + " a dobijam zahtev od " + req.user.email );
	let Datum = new Date();
	let Datum1;
	try {
		Datum1 = new Date(req.body.Datum);
	} catch (e) {
		console.log('Greska u  datumu' + e.message);
	}

	// if (req.body.Datum instanceof Date){
	//   console.log("Datum je poslat");
	//   Datum = req.body.Datum;
	// }
	if (Datum1 instanceof Date) {
		Datum = Datum1;
	}
	const Godina = Datum.getFullYear();

	Uput.find({
		Godina: Godina
	}).exec(function (err, result) {
		if (err) {
			return res.status(404).json({
				success: false,
				message: 'Error processing request ',
				data: {
					broj: 0,
					godina: 0
				}
			}).end();
		}
		const Broj = result.length + 1;
		return res.status(200).json({
			success: true,
			message: 'Uput get number successfully',
			data: {
				broj: Broj,
				godina: Godina
			}
		});
	});

};



// down vote
// accepted
// You need a callback function since this is an async request:

// function authenticate(accesskey, callback)  {
//     var auth = null;

//     userModel.findOne({'uid': accesskey}, function(err, user) {
//         console.log("TRY AUTHENTICATE");

//         if (err) {
//             console.error("Can't Find.!! Error");
//         }

//         //None Found
//         if (user === null) {
//             console.error("ACCESS ERROR : %s  Doesn't Exist", accesskey);
//             auth = false;
//         } else {
//             console.log(user);
//             auth = true;
//         }

//         callback(auth);
//     });
// }
// And call this function like :

// authenticate("key", function (authResult) {
//     //do whatever
// });

function PopulZadRef(keyZad, callback) {
	Zadrugar.findOne({
		_id: keyZad
	}).exec(function (err, result) {
		if (err) {
			console.log('error u findOne');
			callback(err);
			//         // return err;
		} else {
			console.log('Nema greska');
			//  console.log('Upisujem referencu a funkcija je nasla ' +  JSON.stringify(result));
			callback(result);
			//         //return result;
			//       //  item.ZadRef = result;
			//       //  item.TipZadrugar = result.TipZadrugar;
		}
	});

}