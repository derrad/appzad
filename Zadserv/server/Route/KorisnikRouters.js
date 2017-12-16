const express = require('express');
const router = express.Router();

router.get('/api/korisnik',(req,res)=>{
	res.send('GET Korisnik');
});

router.post('/api/korisnik', (req,res)=>{
	res.send('POST Korisnik');
});

router.put('/api/korisnik', (req,res)=>{
	res.send('PUT Korisnik');
});

router.delete('/api/korisnik', (req,res)=>{
	res.send('DELETE Korisnik');
});

module.exports = router;