const express = require('express');
const router = express.Router();
const ai2ch6Controller = require('../Controller/AI2CH6Cont');

// CRUD routes
router.post('/addch6', ai2ch6Controller.createAI2CH6);
router.get('/getch6', ai2ch6Controller.getAllAI2CH6);
router.get('/:id', ai2ch6Controller.getAI2CH6ById);
router.put('/:id', ai2ch6Controller.updateAI2CH6);
router.delete('/:id', ai2ch6Controller.deleteAI2CH6);

module.exports = router;
