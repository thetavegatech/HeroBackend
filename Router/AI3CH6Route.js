const express = require('express');
const router = express.Router();
const ai3ch6Controller = require('../Controller/AI3CH6Cnt');

// CRUD routes
router.post('/addch6', ai3ch6Controller.createAI3CH6);
router.get('/getch6', ai3ch6Controller.getAllAI3CH6);
router.get('/:id', ai3ch6Controller.getAI3CH6ById);
router.put('/:id', ai3ch6Controller.updateAI3CH6);
router.delete('/:id', ai3ch6Controller.deleteAI3CH6);

module.exports = router;
