const express = require('express');
const router = express.Router();
const RadnikController = require('../controllers/RadnikContr');
const passport = require('passport');

router.get('/api/radnik',passport.authenticate('jwt', {session:false}), RadnikController.listradnik);
router.get('/api/radnik/:id',passport.authenticate('jwt', {session:false}), RadnikController.getradnik); // API returns radnik details of given radnik id
router.post('/api/radnik',passport.authenticate('jwt', {session:false}), RadnikController.create);
router.put('/api/radnik/:id',passport.authenticate('jwt', {session:false}), RadnikController.create);
router.delete('/api/radnik/:id',passport.authenticate('jwt', {session:false}), RadnikController.deleradnik);



module.exports = router