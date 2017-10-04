const express = require('express');
const router = express.Router();
const passport = require('passport');
const ParamContrl = require('../controllers/ParametarContrl');


router.get('/api/parametar',passport.authenticate('jwt', {session:false}), ParamContrl.listparam);
router.get('/api/parametar/:id',passport.authenticate('jwt', {session:false}), ParamContrl.getparam); 
router.post('/api/parametar',passport.authenticate('jwt', {session:false}), ParamContrl.create);
router.put('/api/parametar/:id',passport.authenticate('jwt', {session:false}), ParamContrl.create);
router.delete('/api/parametar/:id',passport.authenticate('jwt', {session:false}), ParamContrl.deleparam);


// router.get('/api/parametar', ParamContrl.list);
// router.post('/api/parametar', ParamContrl.create); 

// router.put('/api/parametar', function(req,res){
//     res.send("PUT PARAM");
// });

// router.delete('/api/parametar', function(req,res){
//     res.send("DELETE PARAM");

// });


module.exports = router