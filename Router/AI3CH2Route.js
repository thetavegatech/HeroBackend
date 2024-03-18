const express = require('express');
const router = express.Router();
const ai3ch2Controller = require('../Controller/AI3CH2Cnt');

// CRUD routes
router.post('/addch2', ai3ch2Controller.createAI3CH2);
router.get('/getch2', ai3ch2Controller.getAllAI3CH2);
router.get('/:id', ai3ch2Controller.getAI3CH2ById);
router.put('/:id', ai3ch2Controller.updateAI3CH2);
router.delete('/:id', ai3ch2Controller.deleteAI3CH2);

module.exports = router;
