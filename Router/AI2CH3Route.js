const express = require('express');
const router = express.Router();
const ai2ch3Controller = require('../Controller/AI2CH3Cont');

// CRUD routes
router.post('/addch3', ai2ch3Controller.createAI2CH3);
router.get('/getch3', ai2ch3Controller.getAllAI2CH3);
router.get('/:id', ai2ch3Controller.getAI2CH3ById);
router.put('/:id', ai2ch3Controller.updateAI2CH3);
router.delete('/:id', ai2ch3Controller.deleteAI2CH3);

module.exports = router;
