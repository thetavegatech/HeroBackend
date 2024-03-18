const express = require('express');
const router = express.Router();
const ai2ch4Controller = require('../Controller/AI2CH4Cont');

// CRUD routes
router.post('/addch4', ai2ch4Controller.createAI2CH4);
router.get('/getch4', ai2ch4Controller.getAllAI2CH4);
router.get('/:id', ai2ch4Controller.getAI2CH4ById);
router.put('/:id', ai2ch4Controller.updateAI2CH4);
router.delete('/:id', ai2ch4Controller.deleteAI2CH4);

module.exports = router;
