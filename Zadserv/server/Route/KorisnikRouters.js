var express = require('express')
var router = express.Router()
//var KorisnikController = require('../controllers/KorisnikContrl');


router.get('/api/korisnik',(req,res)=>{
    res.send("GET Korisnik");
});

router.post('/api/korisnik', (req,res)=>{
    res.send("POST Korisnik");
});

router.put('/api/korisnik', (req,res)=>{
    res.send("PUT Korisnik");
});

router.delete('/api/korisnik', (req,res)=>{
    res.send("DELETE Korisnik");
});


module.exports = router