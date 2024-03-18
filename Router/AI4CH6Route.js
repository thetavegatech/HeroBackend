const express = require('express');
const router = express.Router();
const ai4ch6Controller = require('../Controller/AI4CH6cnt');

// CRUD routes
router.post('/addch6', ai4ch6Controller.createAI4CH6);
router.get('/getch6', ai4ch6Controller.getAllAI4CH6);
router.get('/:id', ai4ch6Controller.getAI4CH6ById);
router.put('/:id', ai4ch6Controller.updateAI4CH6);
router.delete('/:id', ai4ch6Controller.deleteAI4CH6);

module.exports = router;
