// const InputAddress = require('../Model/InputAddress');
const InputAddress = require('../Model/InputAddress');


// Controller functions
const createInput = async (req, res) => {
    try {
        const input = new InputAddress(req.body);
        await input.save();
        res.status(201).json(input);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllInputs = async (req, res) => {
    try {
        const inputs = await InputAddress.find();
        res.json(inputs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getInputById = async (req, res) => {
    try {
        const input = await InputAddress.findById(req.params.id);
        if (!input) {
            return res.status(404).json({ message: 'Input not found' });
        }
        res.json(input);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateInput = async (req, res) => {
    try {
        const input = await InputAddress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!input) {
            return res.status(404).json({ message: 'Input not found' });
        }
        res.json(input);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteInput = async (req, res) => {
    try {
        const input = await InputAddress.findByIdAndDelete(req.params.id);
        if (!input) {
            return res.status(404).json({ message: 'Input not found' });
        }
        res.json({ message: 'Input deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createInput,
    getAllInputs,
    getInputById,
    updateInput,
    deleteInput
};
