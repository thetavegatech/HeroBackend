const express = require('express');
const router = express.Router();
const ai4ch1Controller = require('../Controller/AI4CH1cnt');

// CRUD routes
router.post('/addch1', ai4ch1Controller.createAI4CH1);
router.get('/getch1', ai4ch1Controller.getAllAI4CH1);
router.get('/:id', ai4ch1Controller.getAI4CH1ById);
router.put('/:id', ai4ch1Controller.updateAI4CH1);
router.delete('/:id', ai4ch1Controller.deleteAI4CH1);

module.exports = router;
