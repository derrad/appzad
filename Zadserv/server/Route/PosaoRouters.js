var express = require('express')
var router = express.Router()
var PosaoController = require('../controllers/PosaoContrl');


// router.get('/api/posao', PosaoController.list);
// router.post('/api/posao', PosaoController.create); 

// router.put('/api/posao', function(req,res){
//     res.send("PUT POSAO");
// });

// router.delete('/api/posao', function(req,res){
//     res.send("DELETE POSAO");

// });



 router.get('/api/posao', PosaoController.listposao);
 router.get('/api/posao/:id', PosaoController.getposao); 
 router.post('/api/posao', PosaoController.create);
 router.put('/api/posao/:id', PosaoController.create);
 router.delete('/api/posao/:id', PosaoController.deleposao);

module.exports = router