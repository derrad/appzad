const express = require('express');
const router = express.Router();
const VlasnikController = require('../controllers/VlasnikContrl'); 
const passport = require('passport');

router.get('/api/vlasnik',passport.authenticate('jwt', {session:false}), VlasnikController.listavlasnik);
router.get('/api/vlasnik/:id',passport.authenticate('jwt', {session:false}), VlasnikController.getvlasnik); 
router.post('/api/vlasnik',passport.authenticate('jwt', {session:false}), VlasnikController.create);
router.put('/api/vlasnik/:id',passport.authenticate('jwt', {session:false}), VlasnikController.create);
//router.delete('/api/vlasnik/:id', VlasnikController.delevlasnik);

module.exports = router