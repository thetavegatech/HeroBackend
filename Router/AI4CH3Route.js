const express = require('express');
const router = express.Router();
const ai4ch3Controller = require('../Controller/AI4CH3cnt');

// CRUD routes
router.post('/addch3', ai4ch3Controller.createAI4CH3);
router.get('/getch3', ai4ch3Controller.getAllAI4CH3);
router.get('/:id', ai4ch3Controller.getAI4CH3ById);
router.put('/:id', ai4ch3Controller.updateAI4CH3);
router.delete('/:id', ai4ch3Controller.deleteAI4CH3);

module.exports = router;
