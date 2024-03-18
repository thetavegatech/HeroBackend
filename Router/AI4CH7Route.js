const express = require('express');
const router = express.Router();
const ai4ch7Controller = require('../Controller/AI4CH7cnt');

// CRUD routes
router.post('/addch7', ai4ch7Controller.createAI4CH7);
router.get('/getch7', ai4ch7Controller.getAllAI4CH7);
router.get('/:id', ai4ch7Controller.getAI4CH7ById);
router.put('/:id', ai4ch7Controller.updateAI4CH7);
router.delete('/:id', ai4ch7Controller.deleteAI4CH7);

module.exports = router;
