const express = require('express');
const router = express.Router();
const passport = require('passport');
const PartnerController = require('../controllers/PartneriContr');

router.get('/api/partner',passport.authenticate('jwt', {session:false}), PartnerController.listpartner);
router.get('/api/partner/:id',passport.authenticate('jwt', {session:false}), PartnerController.getpartner); 
router.post('/api/partner',passport.authenticate('jwt', {session:false}), PartnerController.create);
router.put('/api/partner/:id',passport.authenticate('jwt', {session:false}), PartnerController.create);
router.delete('/api/partner/:id',passport.authenticate('jwt', {session:false}), PartnerController.delepartner);
router.get('/api/activpartner',passport.authenticate('jwt', {session:false}), PartnerController.listactivpartner);

// router.get('/api/partner',(req,res)=>{
//     res.send("GET partner");
// });

// router.post('/api/partner', (req,res)=>{
//     res.send("POST partner");
// });

// router.put('/api/partner', (req,res)=>{
//     res.send("PUT partner");
// });

// router.delete('/api/partner', (req,res)=>{
//     res.send("DELETE partner");
// });

module.exports = router;