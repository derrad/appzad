var express = require('express')
var router = express.Router()
//var ZadrugarController = require('../controllers/ZadrugarContrl');


router.get('/api/zadrugar',(req,res)=>{
    res.send("GET zadrugar");
});

router.post('/api/zadrugar', (req,res)=>{
    res.send("POST zadrugar");
});

router.put('/api/zadrugar', (req,res)=>{
    res.send("PUT zadrugar");
});

router.delete('/api/zadrugar', (req,res)=>{
    res.send("DELETE zadrugar");
});


module.exports = router