const express = require('express');
const router = express.Router();
// const ai1ch6Controller = require('../Controller/AI1CH6Controller');
const ai1ch6Controller = require('../Controller/AI1CH6Controller')
// CRUD routes
router.post('/addch6', ai1ch6Controller.createAI1CH6);
router.get('/getch6', ai1ch6Controller.getAllAI1CH6);
router.get('/:id', ai1ch6Controller.getAI1CH6ById);
router.put('/:id', ai1ch6Controller.updateAI1CH6);
router.delete('/:id', ai1ch6Controller.deleteAI1CH6);

module.exports = router;
