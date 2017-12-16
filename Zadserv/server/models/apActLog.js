const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TypeA = require('../enum/serverenum');

const apActLog = new Schema({
	Datum: {
		type: Date,
		default: Date.now
	}, // datum kada se aktivnost dogodila
	NameUser: {
		type: String,
		trim: true
	}, // ime usera upisivacemo email
	TypeAct: {
		type: String,
		default: 'Start',
		enum: TypeA.Activities
	}, // tip aktivnosti
	Transact: {
		type: String,
		default: 'SYSTEM ERROR',
		trim: true
	}, // dokument tip
	TransactNumber: {
		type: String,
		trim: true
	}, // broj dokumenta
	Opis: {
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


module.exports = mongoose.model('apActLog', apActLog, 'apActLog');

module.exports.addLog = function (newLog, callback) {
	newLog.save(callback);
};