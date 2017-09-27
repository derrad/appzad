var express = require('express')
var router = express.Router()
var DrzavaController = require('../controllers/DrzaveContrl');


router.get('/api/drzave', DrzavaController.list);
router.post('/api/drzave', DrzavaController.create);

router.put('/api/drzave', function(req,res){
    res.send("POS DRZAVE");
});

router.delete('/api/drzave', function(req,res){
    res.send("DELETE DRZAVE");

});


module.exports = router