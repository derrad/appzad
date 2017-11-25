const express = require('express');
const router = express.Router();
const PosaoController = require('../controllers/PosaoContrl');
const passport = require('passport');

router.get('/api/posao',passport.authenticate('jwt', {session:false}),  PosaoController.listposao);
router.get('/api/posao/:id',passport.authenticate('jwt', {session:false}),  PosaoController.getposao); 
router.post('/api/posao',passport.authenticate('jwt', {session:false}),  PosaoController.create);
router.put('/api/posao/:id',passport.authenticate('jwt', {session:false}),  PosaoController.create);
router.delete('/api/posao/:id',passport.authenticate('jwt', {session:false}),  PosaoController.deleposao);
router.get('/api/countActivposao',passport.authenticate('jwt', {session:false}),  PosaoController.countActivposao);

module.exports = router;