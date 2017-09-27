var express = require('express')
var router = express.Router()
var MestaController = require('../controllers/MestaContr');

router.get('/api/mesta', MestaController.listmesta);
router.get('/api/mesta/:id', MestaController.getomesta); 
router.post('/api/mesta', MestaController.create);
router.put('/api/mesta/:id', MestaController.create);
router.delete('/api/mesta/:id', MestaController.delemesta);


// router.get('/api/mesta',(req,res)=>{
//     res.send("GET mesta");
// });

// router.post('/api/mesta', (req,res)=>{
//     res.send("POST mesta");
// });

// router.put('/api/mesta', (req,res)=>{
//     res.send("PUT mesta");
// });

// router.delete('/api/mesta', (req,res)=>{
//     res.send("DELETE mesta");
// });


module.exports = router