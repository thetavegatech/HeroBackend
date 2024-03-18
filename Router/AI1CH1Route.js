const express = require('express');
const route = express.Router();
const ai1ch1Controller = require('../Controller/AI1CH1Controller');

// CRUD routes
route.post('/addch1', ai1ch1Controller.createAI1CH1);
route.get('/getch', ai1ch1Controller.getAllAI1CH1);
route.get('/:id', ai1ch1Controller.getAI1CH1ById);
route.put('/:id', ai1ch1Controller.updateAI1CH1);
route.delete('/:id', ai1ch1Controller.deleteAI1CH1);

module.exports = route;
