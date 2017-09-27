var express = require('express')
var router = express.Router()
var VlasnikController = require('../controllers/VlasnikContrl'); 

router.get('/api/vlasnik', VlasnikController.listavlasnik);
router.get('/api/vlasnik/:id', VlasnikController.getvlasnik); 
router.post('/api/vlasnik', VlasnikController.create);
router.put('/api/vlasnik/:id', VlasnikController.create);
//router.delete('/api/vlasnik/:id', RadnikController.deleradnik);

module.exports = router