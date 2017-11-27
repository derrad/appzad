const express = require('express');
const router = express.Router();
const passport = require('passport');
const DrzavaController = require('../controllers/DrzaveContrl');

router.get('/api/drzave',passport.authenticate('jwt', {session:false}), DrzavaController.listdrzave);
router.get('/api/drzave/:id',passport.authenticate('jwt', {session:false}), DrzavaController.getdrzava); 
router.post('/api/drzave',passport.authenticate('jwt', {session:false}), DrzavaController.create);
router.put('/api/drzave/:id',passport.authenticate('jwt', {session:false}), DrzavaController.create);
router.delete('/api/drzave/:id', passport.authenticate('jwt', {session:false}),DrzavaController.deledrzava);

module.exports = router;