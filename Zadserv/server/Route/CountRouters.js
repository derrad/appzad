const express = require('express');
const router = express.Router();
const PosaoController = require('../controllers/PosaoContrl');
const PartnerController = require('../controllers/PartneriContr');
const passport = require('passport');

router.get('/api/countposaoall/',passport.authenticate('jwt', {session:false}),  PosaoController.countposao);
router.get('/api/countkupciall/',passport.authenticate('jwt', {session:false}),  PartnerController.countkupac);

module.exports = router;