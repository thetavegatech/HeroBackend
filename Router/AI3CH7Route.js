const express = require('express');
const router = express.Router();
const ai3ch7Controller = require('../Controller/AI3CH7Cnt');

// CRUD routes
router.post('/addch7', ai3ch7Controller.createAI3CH7);
router.get('/getch7', ai3ch7Controller.getAllAI3CH7);
router.get('/:id', ai3ch7Controller.getAI3CH7ById);
router.put('/:id', ai3ch7Controller.updateAI3CH7);
router.delete('/:id', ai3ch7Controller.deleteAI3CH7);

module.exports = router;
