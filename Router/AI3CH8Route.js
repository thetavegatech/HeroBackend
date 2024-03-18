const express = require('express');
const router = express.Router();
const ai3ch8Controller = require('../Controller/AI3CH8Cnt');

// CRUD routes
router.post('/addch8', ai3ch8Controller.createAI3CH8);
router.get('/getch8', ai3ch8Controller.getAllAI3CH8);
router.get('/:id', ai3ch8Controller.getAI3CH8ById);
router.put('/:id', ai3ch8Controller.updateAI3CH8);
router.delete('/:id', ai3ch8Controller.deleteAI3CH8);

module.exports = router;
