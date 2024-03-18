const express = require('express');
const router = express.Router();
const inputAddressController = require('../Controller/InputController');

// CRUD routes
router.post('/addinput', inputAddressController.createInput);
router.get('/getinput', inputAddressController.getAllInputs);
router.get('/:id', inputAddressController.getInputById);
router.put('/:id', inputAddressController.updateInput);
router.delete('/:id', inputAddressController.deleteInput);

module.exports = router;
