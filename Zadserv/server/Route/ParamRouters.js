var express = require('express')
var router = express.Router()
var ParamContrl = require('../controllers/ParametarContrl');


router.get('/api/parametar', ParamContrl.list);
router.post('/api/parametar', ParamContrl.create); 

router.put('/api/parametar', function(req,res){
    res.send("PUT PARAM");
});

router.delete('/api/parametar', function(req,res){
    res.send("DELETE PARAM");

});


module.exports = router