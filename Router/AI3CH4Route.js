const express = require('express');
const router = express.Router();
const ai3ch4Controller = require('../Controller/AI3CH4Cnt');

// CRUD routes
router.post('/addch4', ai3ch4Controller.createAI3CH4);
router.get('/getch4', ai3ch4Controller.getAllAI3CH4);
router.get('/:id', ai3ch4Controller.getAI3CH4ById);
router.put('/:id', ai3ch4Controller.updateAI3CH4);
router.delete('/:id', ai3ch4Controller.deleteAI3CH4);

module.exports = router;
