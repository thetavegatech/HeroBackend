const express = require('express');
const router = express.Router();
const ai1ch8Controller = require('../Controller/AI1CH8Controller');

// CRUD routes
router.post('/addch8', ai1ch8Controller.createAI1CH8);
router.get('/getch8', ai1ch8Controller.getAllAI1CH8);
router.get('/:id', ai1ch8Controller.getAI1CH8ById);
router.put('/:id', ai1ch8Controller.updateAI1CH8);
router.delete('/:id', ai1ch8Controller.deleteAI1CH8);

module.exports = router;
