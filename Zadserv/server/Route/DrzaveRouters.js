const express = require('express');
const router = express.Router();
const passport = require('passport');
const DrzavaController = require('../controllers/DrzaveContrl');


// router.get('/api/drzave', DrzavaController.list);
// router.post('/api/drzave', DrzavaController.create);

// router.put('/api/drzave', function(req,res){
//     res.send("POS DRZAVE");
// });

// router.delete('/api/drzave', function(req,res){
//     res.send("DELETE DRZAVE");

// });

router.get('/api/drzave',passport.authenticate('jwt', {session:false}), DrzavaController.listdrzave);
router.get('/api/drzave/:id',passport.authenticate('jwt', {session:false}), DrzavaController.getdrzava); 
router.post('/api/drzave',passport.authenticate('jwt', {session:false}), DrzavaController.create);
router.put('/api/drzave/:id',passport.authenticate('jwt', {session:false}), DrzavaController.create);
router.delete('/api/drzave/:id', passport.authenticate('jwt', {session:false}),DrzavaController.deledrzava);


module.exports = router