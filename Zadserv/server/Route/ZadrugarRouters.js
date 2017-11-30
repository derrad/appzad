const express = require('express');
const router = express.Router();
const passport = require('passport');
const ZadrugarController = require('../controllers/ZadrugarContr');

router.get('/api/zadrugar',passport.authenticate('jwt', {session:false}), ZadrugarController.listzadrugar);
router.get('/api/zadrugar/:id',passport.authenticate('jwt', {session:false}), ZadrugarController.getzadrugar); 
router.post('/api/zadrugar',passport.authenticate('jwt', {session:false}), ZadrugarController.create);
router.put('/api/zadrugar/:id',passport.authenticate('jwt', {session:false}), ZadrugarController.create);
router.delete('/api/zadrugar/:id',passport.authenticate('jwt', {session:false}), ZadrugarController.delezadrugar);
router.get('/api/activzadrugar',passport.authenticate('jwt', {session:false}), ZadrugarController.listactivzadrugar);
router.get('/api/uputzadrugar',passport.authenticate('jwt', {session:false}), ZadrugarController.countUputZadrugar);
router.get('/api/countactivzadrugar',passport.authenticate('jwt', {session:false}), ZadrugarController.countactivzadrugar);
router.get('/api/pickzadrugar',passport.authenticate('jwt', {session:false}), ZadrugarController.pickzadrugar);

module.exports = router;