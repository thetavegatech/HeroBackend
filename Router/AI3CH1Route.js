const express = require('express');
const router = express.Router();
const ai3ch1Controller = require('../Controller/AI3CH1Cnt');

// CRUD routes
router.post('/addch1', ai3ch1Controller.createAI3CH1);
router.get('/getch1', ai3ch1Controller.getAllAI3CH1);
router.get('/:id', ai3ch1Controller.getAI3CH1ById);
router.put('/:id', ai3ch1Controller.updateAI3CH1);
router.delete('/:id', ai3ch1Controller.deleteAI3CH1);

module.exports = router;
