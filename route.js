
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/api/card', controller.postCard);
router.get('/api/cards', controller.getAllCards);

module.exports = router;
