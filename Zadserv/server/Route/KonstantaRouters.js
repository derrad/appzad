const express = require('express');
const router = express.Router();
const passport = require('passport');
const KonstantaController = require('../controllers/KonstantaContr');

router.get('/api/konstanta',passport.authenticate('jwt', {session:false}), KonstantaController.listkonst);
router.get('/api/konstanta/:id',passport.authenticate('jwt', {session:false}), KonstantaController.getkonst); 
router.post('/api/konstanta',passport.authenticate('jwt', {session:false}), KonstantaController.create);
router.put('/api/konstanta/:id',passport.authenticate('jwt', {session:false}), KonstantaController.create);
router.delete('/api/konstanta/:id',passport.authenticate('jwt', {session:false}), KonstantaController.delekonst);

module.exports = router