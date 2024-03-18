const express = require('express');
const router = express.Router();
const ai1ch2Controller = require('../Controller/AI1CH2Controller');

// CRUD routes
router.post('/addch2', ai1ch2Controller.createAI1CH2);
router.get('/getch2', ai1ch2Controller.getAllAI1CH2);
router.get('/:id', ai1ch2Controller.getAI1CH2ById);
router.put('/:id', ai1ch2Controller.updateAI1CH2);
router.delete('/:id', ai1ch2Controller.deleteAI1CH2);

module.exports = router;
