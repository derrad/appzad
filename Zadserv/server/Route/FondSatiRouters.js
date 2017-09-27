var express = require('express')
var router = express.Router()
var FondSatiController = require('../controllers/FondSatiContrl');


router.get('/api/fondsati', FondSatiController.listfondsati);
router.get('/api/fondsati/:id', FondSatiController.getfondsati); 
router.post('/api/fondsati', FondSatiController.create);
router.put('/api/fondsati/:id', FondSatiController.create);
router.delete('/api/fondsati/:id', FondSatiController.delefondsati);

// router.get('/api/fondsati',(req,res)=>{
//     res.send("GET FondSati");
// });

// router.post('/api/fondsati', (req,res)=>{
//     res.send("POST FondSati");
// });

// router.put('/api/fondsati', (req,res)=>{
//     res.send("PUT FondSati");
// });

// router.delete('/api/fondsati', (req,res)=>{
//     res.send("DELETE FondSati");
// });

module.exports = router