// Import the AI3CH3 model
const AI2CH3 = require('../Model/AI2CH3');

// Controller functions
const createAI2CH3 = async (req, res) => {
    try {
        const ai2ch3 = new AI2CH3(req.body);
        await ai2ch3.save();
        res.status(201).json(ai2ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH3 = async (req, res) => {
    try {
        const ai2ch3s = await AI2CH3.find();
        res.json(ai2ch3s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH3ById = async (req, res) => {
    try {
        const ai2ch3 = await AI2CH3.findById(req.params.id);
        if (!ai2ch3) {
            return res.status(404).json({ message: 'AI2CH3 not found' });
        }
        res.json(ai2ch3);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH3 = async (req, res) => {
    try {
        const ai2ch3 = await AI2CH3.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch3) {
            return res.status(404).json({ message: 'AI2CH3 not found' });
        }
        res.json(ai2ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH3 = async (req, res) => {
    try {
        const ai2ch3 = await AI2CH3.findByIdAndDelete(req.params.id);
        if (!ai2ch3) {
            return res.status(404).json({ message: 'AI2CH3 not found' });
        }
        res.json({ message: 'AI2CH3 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH3,
    getAllAI2CH3,
    getAI2CH3ById,
    updateAI2CH3,
    deleteAI2CH3
};
