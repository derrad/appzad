const express = require('express');
const router = express.Router();
const passport = require('passport');
const MestaController = require('../controllers/MestaContr');

router.get('/api/mesta',passport.authenticate('jwt', {session:false}), MestaController.listmesta);
router.get('/api/mesta/:id',passport.authenticate('jwt', {session:false}), MestaController.getmesta); 
router.post('/api/mesta',passport.authenticate('jwt', {session:false}), MestaController.create);
router.put('/api/mesta/:id',passport.authenticate('jwt', {session:false}), MestaController.create);
router.delete('/api/mesta/:id',passport.authenticate('jwt', {session:false}), MestaController.delemesta);
router.get('/api/pickmesta',passport.authenticate('jwt', {session:false}), MestaController.pickmesta);

module.exports = router;