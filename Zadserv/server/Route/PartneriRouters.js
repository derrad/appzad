var express = require('express')
var router = express.Router()
//var PartnerController = require('../controllers/PartnerContrl');


router.get('/api/partner',(req,res)=>{
    res.send("GET partner");
});

router.post('/api/partner', (req,res)=>{
    res.send("POST partner");
});

router.put('/api/partner', (req,res)=>{
    res.send("PUT partner");
});

router.delete('/api/partner', (req,res)=>{
    res.send("DELETE partner");
});


module.exports = router