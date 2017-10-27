const express = require('express');
const router = express.Router();
const ActLogController = require('../controllers/ActLogContrl');
//const passport = require('passport');

router.get('/api/activities',ActLogController.listaAct);
// router.get('/api/radnik/:id',passport.authenticate('jwt', {session:false}), RadnikController.getradnik); // API returns radnik details of given radnik id
// router.post('/api/radnik',passport.authenticate('jwt', {session:false}), RadnikController.create);
// router.put('/api/radnik/:id',passport.authenticate('jwt', {session:false}), RadnikController.create);
// router.delete('/api/radnik/:id',passport.authenticate('jwt', {session:false}), RadnikController.deleradnik);


module.exports = router