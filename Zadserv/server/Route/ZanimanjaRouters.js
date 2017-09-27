var express = require('express')
var router = express.Router()
var ZanimanjaController = require('../controllers/ZanimanjaContr');



router.get('/api/zanimanja', ZanimanjaController.listzanimanja);
router.get('/api/zanimanja/:id', ZanimanjaController.getzanimanja); 
router.post('/api/zanimanja', ZanimanjaController.create);
router.put('/api/zanimanja/:id', ZanimanjaController.create);
router.delete('/api/zanimanja/:id', ZanimanjaController.delezanimanja);

// router.get('/api/zanimanja',(req,res)=>{
//     res.send("GET zanimanja");
// });

// router.post('/api/zanimanja', (req,res)=>{
//     res.send("POST zanimanja");
// });

// router.put('/api/zanimanja', function(req,res){
//     res.send("PUT zanimanja");
// });

// router.delete('/api/zanimanja', function(req,res){
//     res.send("DELETE zanimanja");
// });


module.exports = router