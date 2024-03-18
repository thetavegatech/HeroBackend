const express = require('express');
const router = express.Router();
const ai4ch5Controller = require('../Controller/AI4CH5cnt');

// CRUD routes
router.post('/addch5', ai4ch5Controller.createAI4CH5);
router.get('/getch5', ai4ch5Controller.getAllAI4CH5);
router.get('/:id', ai4ch5Controller.getAI4CH5ById);
router.put('/:id', ai4ch5Controller.updateAI4CH5);
router.delete('/:id', ai4ch5Controller.deleteAI4CH5);

module.exports = router;
