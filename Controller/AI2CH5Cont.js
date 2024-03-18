// Import the AI5CH5 model
const AI2CH5 = require('../Model/AI2CH5');

// Controller functions
const createAI2CH5 = async (req, res) => {
    try {
        const ai2ch5 = new AI2CH5(req.body);
        await ai2ch5.save();
        res.status(201).json(ai2ch5);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH5 = async (req, res) => {
    try {
        const ai2ch5s = await AI2CH5.find();
        res.json(ai2ch5s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH5ById = async (req, res) => {
    try {
        const ai2ch5 = await AI2CH5.findById(req.params.id);
        if (!ai2ch5) {
            return res.status(404).json({ message: 'AI2CH5 not found' });
        }
        res.json(ai2ch5);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH5 = async (req, res) => {
    try {
        const ai2ch5 = await AI2CH5.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch5) {
            return res.status(404).json({ message: 'AI2CH5 not found' });
        }
        res.json(ai2ch5);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH5 = async (req, res) => {
    try {
        const ai2ch5 = await AI2CH5.findByIdAndDelete(req.params.id);
        if (!ai2ch5) {
            return res.status(404).json({ message: 'AI2CH5 not found' });
        }
        res.json({ message: 'AI2CH5 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH5,
    getAllAI2CH5,
    getAI2CH5ById,
    updateAI2CH5,
    deleteAI2CH5
};
