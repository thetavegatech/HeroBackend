const express = require('express');
const router = express.Router();
const ai1ch4Controller = require('../Controller/AI1CH4Controller');

// CRUD routes
router.post('/addch4', ai1ch4Controller.createAI1CH4);
router.get('/getch4', ai1ch4Controller.getAllAI1CH4);
router.get('/:id', ai1ch4Controller.getAI1CH4ById);
router.put('/:id', ai1ch4Controller.updateAI1CH4);
router.delete('/:id', ai1ch4Controller.deleteAI1CH4);

module.exports = router;
