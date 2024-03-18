const express = require('express');
const router = express.Router();
const ai2ch5Controller = require('../Controller/AI2CH5Cont');

// CRUD routes
router.post('/addch5', ai2ch5Controller.createAI2CH5);
router.get('/getch5', ai2ch5Controller.getAllAI2CH5);
router.get('/:id', ai2ch5Controller.getAI2CH5ById);
router.put('/:id', ai2ch5Controller.updateAI2CH5);
router.delete('/:id', ai2ch5Controller.deleteAI2CH5);

module.exports = router;
