var express = require('express')
var router = express.Router()
var PosaoController = require('../controllers/VezbeContr');

 router.get('/api/person', PosaoController.listPerson);
 router.get('/api/person/:id', PosaoController.getPerson); 
 router.post('/api/person', PosaoController.createPerson);
 router.put('/api/person/:id', PosaoController.createPerson);
 router.delete('/api/person/:id', PosaoController.delePerson);


 router.get('/api/story', PosaoController.listStory);
 router.post('/api/story', PosaoController.createStory);
 router.put('/api/story/:id', PosaoController.createStory);


module.exports = router;