var express = require('express');
var router = express.Router();
var RadnikController = require('../controllers/RadnikContr');

// router.get('/api/radnik',(req,res)=>{
//     res.send("GET radnik");
// });

router.get('/api/radnik', RadnikController.listradnik);
router.get('/api/radnik/:id', RadnikController.getradnik); // API returns radnik details of given radnik id
router.post('/api/radnik', RadnikController.create);
router.put('/api/radnik/:id', RadnikController.create);
router.delete('/api/radnik/:id', RadnikController.deleradnik);


// router.put('/api/radnik/:id', (req,res)=>{
//     res.send("PUT radnik");
// });

//  router.delete('/api/radnik/:id', (req,res)=>{
//     console.log("parametar je : " + req.params.id);
//      res.send("DELETE radnik");
//  });




module.exports = router