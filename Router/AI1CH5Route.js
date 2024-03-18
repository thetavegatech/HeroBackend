const express = require('express');
const router = express.Router();
const ai1ch5Controller = require('../Controller/AI1CH5Controller');

// CRUD routes
router.post('/addch5', ai1ch5Controller.createAI1CH5);
router.get('/getch5', ai1ch5Controller.getAllAI1CH5);
router.get('/:id', ai1ch5Controller.getAI1CH5ById);
router.put('/:id', ai1ch5Controller.updateAI1CH5);
router.delete('/:id', ai1ch5Controller.deleteAI1CH5);

module.exports = router;
