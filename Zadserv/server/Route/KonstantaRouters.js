var express = require('express')
var router = express.Router()
var KonstantaController = require('../controllers/KonstantaContr');


router.get('/api/konstanta', KonstantaController.listkonst);
router.get('/api/konstanta/:id', KonstantaController.getkonst); 
router.post('/api/konstanta', KonstantaController.create);
router.put('/api/konstanta/:id', KonstantaController.create);
router.delete('/api/konstanta/:id', KonstantaController.delekonst);


// router.get('/api/konstanta',(req,res)=>{
//     res.send("GET Konstanta");
// });

// router.post('/api/konstanta', (req,res)=>{
//     res.send("POST Konstanta");
// });

// router.put('/api/konstanta', (req,res)=>{
//     res.send("PUT Konstanta");
// });

// router.delete('/api/konstanta', (req,res)=>{
//     res.send("DELETE Konstanta");
// });


module.exports = router