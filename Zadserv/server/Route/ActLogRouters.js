const express = require('express');
const router = express.Router();
const ActLogController = require('../controllers/ActLogContrl');
//const passport = require('passport');

router.get('/api/activities',ActLogController.listaAct);

module.exports = router;