const express = require('express');
const router = express.Router();
const ai2ch2Controller = require('../Controller/AI2CH2Cnt');

// CRUD routes
router.post('/addch2', ai2ch2Controller.createAI2CH2);
router.get('/getch2', ai2ch2Controller.getAllAI2CH2);
router.get('/:id', ai2ch2Controller.getAI2CH2ById);
router.put('/:id', ai2ch2Controller.updateAI2CH2);
router.delete('/:id', ai2ch2Controller.deleteAI2CH2);

module.exports = router;
