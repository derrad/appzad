const express = require('express');
const router = express.Router();
const passport = require('passport');
const OpstineController = require('../controllers/OpstineContr');

router.get('/api/opstine',passport.authenticate('jwt', {session:false}), OpstineController.listopstine);
router.get('/api/opstine/:id',passport.authenticate('jwt', {session:false}), OpstineController.getopstine); 
router.post('/api/opstine',passport.authenticate('jwt', {session:false}), OpstineController.create);
router.put('/api/opstine/:id',passport.authenticate('jwt', {session:false}), OpstineController.create);
router.delete('/api/opstine/:id',passport.authenticate('jwt', {session:false}), OpstineController.deleopstine);


module.exports = router