const express = require('express');
const router = express.Router();
const ai2ch1Controller = require('../Controller/AI2CH1Cnt');

// CRUD routes
router.post('/addch1', ai2ch1Controller.createAI2CH1);
router.get('/getch1', ai2ch1Controller.getAllAI2CH1);
router.get('/:id', ai2ch1Controller.getAI2CH1ById);
router.put('/:id', ai2ch1Controller.updateAI2CH1);
router.delete('/:id', ai2ch1Controller.deleteAI2CH1);

module.exports = router;
