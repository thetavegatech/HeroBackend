const express = require('express');
const router = express.Router();
const ai2ch8Controller = require('../Controller/AI2CH8Cont');

// CRUD routes
router.post('/addch8', ai2ch8Controller.createAI2CH8);
router.get('/getch8', ai2ch8Controller.getAllAI2CH8);
router.get('/:id', ai2ch8Controller.getAI2CH8ById);
router.put('/:id', ai2ch8Controller.updateAI2CH8);
router.delete('/:id', ai2ch8Controller.deleteAI2CH8);

module.exports = router;
