// Import the AI7CH7 model
const AI2CH7 = require('../Model/AI2CH7');

// Controller functions
const createAI2CH7 = async (req, res) => {
    try {
        const ai2ch7 = new AI2CH7(req.body);
        await ai2ch7.save();
        res.status(201).json(ai2ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH7 = async (req, res) => {
    try {
        const ai2ch7s = await AI2CH7.find();
        res.json(ai2ch7s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH7ById = async (req, res) => {
    try {
        const ai2ch7 = await AI2CH7.findById(req.params.id);
        if (!ai2ch7) {
            return res.status(404).json({ message: 'AI2CH7 not found' });
        }
        res.json(ai2ch7);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH7 = async (req, res) => {
    try {
        const ai2ch7 = await AI2CH7.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch7) {
            return res.status(404).json({ message: 'AI2CH7 not found' });
        }
        res.json(ai2ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH7 = async (req, res) => {
    try {
        const ai2ch7 = await AI2CH7.findByIdAndDelete(req.params.id);
        if (!ai2ch7) {
            return res.status(404).json({ message: 'AI2CH7 not found' });
        }
        res.json({ message: 'AI2CH7 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH7,
    getAllAI2CH7,
    getAI2CH7ById,
    updateAI2CH7,
    deleteAI2CH7
};
