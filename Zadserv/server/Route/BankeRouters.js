const express = require('express');
const router = express.Router();
const passport = require('passport');
const BankeContrl = require('../controllers/BankeContrl');


router.get('/api/banke',passport.authenticate('jwt', {session:false}), BankeContrl.listbanke);
router.get('/api/banke/:id',passport.authenticate('jwt', {session:false}), BankeContrl.getbanka); 
router.post('/api/banke',passport.authenticate('jwt', {session:false}), BankeContrl.create);
router.put('/api/banke/:id',passport.authenticate('jwt', {session:false}), BankeContrl.create);
router.delete('/api/banke/:id', passport.authenticate('jwt', {session:false}),BankeContrl.delbanka);
router.get('/api/activbanke', passport.authenticate('jwt', {session:false}),BankeContrl.listactivbanke);

module.exports = router;