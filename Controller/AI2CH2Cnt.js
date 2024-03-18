// Import the AI2CH2 model
const AI2CH2 = require('../Model/AI2CH2');

// Controller functions
const createAI2CH2 = async (req, res) => {
    try {
        const ai2ch2 = new AI2CH2(req.body);
        await ai2ch2.save();
        res.status(201).json(ai2ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH2 = async (req, res) => {
    try {
        const ai2ch2s = await AI2CH2.find();
        res.json(ai2ch2s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH2ById = async (req, res) => {
    try {
        const ai2ch2 = await AI2CH2.findById(req.params.id);
        if (!ai2ch2) {
            return res.status(404).json({ message: 'AI2CH2 not found' });
        }
        res.json(ai2ch2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH2 = async (req, res) => {
    try {
        const ai2ch2 = await AI2CH2.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch2) {
            return res.status(404).json({ message: 'AI2CH2 not found' });
        }
        res.json(ai2ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH2 = async (req, res) => {
    try {
        const ai2ch2 = await AI2CH2.findByIdAndDelete(req.params.id);
        if (!ai2ch2) {
            return res.status(404).json({ message: 'AI2CH2 not found' });
        }
        res.json({ message: 'AI2CH2 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH2,
    getAllAI2CH2,
    getAI2CH2ById,
    updateAI2CH2,
    deleteAI2CH2
};
