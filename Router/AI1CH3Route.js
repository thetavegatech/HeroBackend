const express = require('express');
const router = express.Router();
const ai1ch3Controller = require('../Controller/AI1CH3Controller');

// CRUD routes
router.post('/addch3', ai1ch3Controller.createAI1CH3);
router.get('/getch3', ai1ch3Controller.getAllAI1CH3);
router.get('/:id', ai1ch3Controller.getAI1CH3ById);
router.put('/:id', ai1ch3Controller.updateAI1CH3);
router.delete('/:id', ai1ch3Controller.deleteAI1CH3);

module.exports = router;
