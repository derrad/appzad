var express = require('express')
var router = express.Router()
var OpstineController = require('../controllers/OpstineContr');


router.get('/api/opstine', OpstineController.listopstine);
router.get('/api/opstine/:id', OpstineController.getopstine); 
router.post('/api/opstine', OpstineController.create);
router.put('/api/opstine/:id', OpstineController.create);
router.delete('/api/opstine/:id', OpstineController.deleopstine);



// router.get('/api/opstine',(req,res)=>{
//     res.send("GET opstine");
// });

// router.post('/api/opstine', (req,res)=>{
//     res.send("POST opstine");
// });

// router.put('/api/opstine', (req,res)=>{
//     res.send("PUT opstine");
// });

// router.delete('/api/opstine', (req,res)=>{
//     res.send("DELETE opstine");
// });


module.exports = router