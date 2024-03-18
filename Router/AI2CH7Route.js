const express = require('express');
const router = express.Router();
const ai2ch7Controller = require('../Controller/AI2CH7Cont');

// CRUD routes
router.post('/addch7', ai2ch7Controller.createAI2CH7);
router.get('/getch7', ai2ch7Controller.getAllAI2CH7);
router.get('/:id', ai2ch7Controller.getAI2CH7ById);
router.put('/:id', ai2ch7Controller.updateAI2CH7);
router.delete('/:id', ai2ch7Controller.deleteAI2CH7);

module.exports = router;
