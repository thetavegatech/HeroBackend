const express = require('express');
const router = express.Router();
const ai3ch5Controller = require('../Controller/AI3CH5Cnt');

// CRUD routes
router.post('/addch5', ai3ch5Controller.createAI3CH5);
router.get('/getch5', ai3ch5Controller.getAllAI3CH5);
router.get('/:id', ai3ch5Controller.getAI3CH5ById);
router.put('/:id', ai3ch5Controller.updateAI3CH5);
router.delete('/:id', ai3ch5Controller.deleteAI3CH5);

module.exports = router;
