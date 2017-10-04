const express = require('express');
const router = express.Router();
const passport = require('passport');
const FondSatiController = require('../controllers/FondSatiContrl');

router.get('/api/fondsati', passport.authenticate('jwt', {session:false}),FondSatiController.listfondsati);
router.get('/api/fondsati/:id',passport.authenticate('jwt', {session:false}), FondSatiController.getfondsati); 
router.post('/api/fondsati', passport.authenticate('jwt', {session:false}),FondSatiController.create);
router.put('/api/fondsati/:id',passport.authenticate('jwt', {session:false}), FondSatiController.create);
router.delete('/api/fondsati/:id',passport.authenticate('jwt', {session:false}), FondSatiController.delefondsati);

module.exports = router