const express = require('express');
const router = express.Router();
const ai1ch7Controller = require('../Controller/AI1CH7Controller');

// CRUD routes
router.post('/addch7', ai1ch7Controller.createAI1CH7);
router.get('/getch7', ai1ch7Controller.getAllAI1CH7);
router.get('/:id', ai1ch7Controller.getAI1CH7ById);
router.put('/:id', ai1ch7Controller.updateAI1CH7);
router.delete('/:id', ai1ch7Controller.deleteAI1CH7);

module.exports = router;
