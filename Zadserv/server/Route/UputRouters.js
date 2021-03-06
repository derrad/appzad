const express = require('express');
const router = express.Router();
const passport = require('passport');
const UputController = require('../controllers/UputContr');


router.get('/api/uput',passport.authenticate('jwt', {session:false}), UputController.listUput);
router.get('/api/uput/:id',passport.authenticate('jwt', {session:false}), UputController.getUput); 
router.post('/api/uput',passport.authenticate('jwt', {session:false}), UputController.create);
router.put('/api/uput/:id',passport.authenticate('jwt', {session:false}), UputController.create);
router.delete('/api/uput/:id',passport.authenticate('jwt', {session:false}), UputController.deleUput);
router.post('/api/uputbroj',passport.authenticate('jwt', {session:false}), UputController.getUputBrojGod); 
router.get('/api/countuputall',passport.authenticate('jwt', {session:false}), UputController.countUput);
router.get('/api/countuputfakt',passport.authenticate('jwt', {session:false}), UputController.countUputFakt);
router.get('/api/countuputstorn',passport.authenticate('jwt', {session:false}), UputController.countUputStorn);

router.post('/api/maxbroj',passport.authenticate('jwt', {session:false}), UputController.getUputBrojGodMax);

module.exports = router;