const express = require('express');
const router = express.Router();
const ai4ch8Controller = require('../Controller/AI4CH8cnt');

// CRUD routes
router.post('/addch8', ai4ch8Controller.createAI4CH8);
router.get('/getch8', ai4ch8Controller.getAllAI4CH8);
router.get('/:id', ai4ch8Controller.getAI4CH8ById);
router.put('/:id', ai4ch8Controller.updateAI4CH8);
router.delete('/:id', ai4ch8Controller.deleteAI4CH8);

module.exports = router;
