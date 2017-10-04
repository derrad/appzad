const express = require('express');
const router = express.Router();
const ZanimanjaController = require('../controllers/ZanimanjaContr');
const passport = require('passport');

router.get('/api/zanimanja',passport.authenticate('jwt', {session:false}),  ZanimanjaController.listzanimanja);
router.get('/api/zanimanja/:id',passport.authenticate('jwt', {session:false}),  ZanimanjaController.getzanimanja); 
router.post('/api/zanimanja',passport.authenticate('jwt', {session:false}),  ZanimanjaController.create);
router.put('/api/zanimanja/:id',passport.authenticate('jwt', {session:false}),  ZanimanjaController.create);
router.delete('/api/zanimanja/:id',passport.authenticate('jwt', {session:false}),  ZanimanjaController.delezanimanja);

module.exports = router