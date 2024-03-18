const express = require('express');
const router = express.Router();
const ai3ch3Controller = require('../Controller/AI3CH3Cnt');

// CRUD routes
router.post('/addch3', ai3ch3Controller.createAI3CH3);
router.get('/getch3', ai3ch3Controller.getAllAI3CH3);
router.get('/:id', ai3ch3Controller.getAI3CH3ById);
router.put('/:id', ai3ch3Controller.updateAI3CH3);
router.delete('/:id', ai3ch3Controller.deleteAI3CH3);

module.exports = router;
