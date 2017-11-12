const express = require('express');
const router = express.Router();
const PosaoController = require('../controllers/PosaoContrl');
const PartnerController = require('../controllers/PartneriContr');
const ZadrugarController = require('../controllers/ZadrugarContr');

const passport = require('passport');

router.get('/api/countposaoall/',passport.authenticate('jwt', {session:false}),  PosaoController.countposao);
router.get('/api/countkupciall/',passport.authenticate('jwt', {session:false}),  PartnerController.countkupac);
router.get('/api/countzadrugarall/',passport.authenticate('jwt', {session:false}),  ZadrugarController.countzadrugar);

module.exports = router;