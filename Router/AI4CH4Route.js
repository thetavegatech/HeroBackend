const express = require('express');
const router = express.Router();
const ai4ch4Controller = require('../Controller/AI4CH4cnt');

// CRUD routes
router.post('/addch4', ai4ch4Controller.createAI4CH4);
router.get('/getch4', ai4ch4Controller.getAllAI4CH4);
router.get('/:id', ai4ch4Controller.getAI4CH4ById);
router.put('/:id', ai4ch4Controller.updateAI4CH4);
router.delete('/:id', ai4ch4Controller.deleteAI4CH4);

module.exports = router;
