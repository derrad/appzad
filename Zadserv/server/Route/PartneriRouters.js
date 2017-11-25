const express = require('express');
const router = express.Router();
const passport = require('passport');
const PartnerController = require('../controllers/PartneriContr');

router.get('/api/partner',passport.authenticate('jwt', {session:false}), PartnerController.listpartner);
router.get('/api/partner/:id',passport.authenticate('jwt', {session:false}), PartnerController.getpartner); 
router.post('/api/partner',passport.authenticate('jwt', {session:false}), PartnerController.create);
router.put('/api/partner/:id',passport.authenticate('jwt', {session:false}), PartnerController.create);
router.delete('/api/partner/:id',passport.authenticate('jwt', {session:false}), PartnerController.delepartner);
router.get('/api/activpartner',passport.authenticate('jwt', {session:false}), PartnerController.listactivpartner);
router.get('/api/countactivpartner',passport.authenticate('jwt', {session:false}), PartnerController.countkupacActiv);
router.get('/api/countpartneruput',passport.authenticate('jwt', {session:false}), PartnerController.countkupacUput);

module.exports = router;