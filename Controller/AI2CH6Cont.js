// Import the AI6CH6 model
const AI2CH6 = require('../Model/AI2CH6');

// Controller functions
const createAI2CH6 = async (req, res) => {
    try {
        const ai2ch6 = new AI2CH6(req.body);
        await ai2ch6.save();
        res.status(201).json(ai2ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH6 = async (req, res) => {
    try {
        const ai2ch6s = await AI2CH6.find();
        res.json(ai2ch6s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH6ById = async (req, res) => {
    try {
        const ai2ch6 = await AI2CH6.findById(req.params.id);
        if (!ai2ch6) {
            return res.status(404).json({ message: 'AI2CH6 not found' });
        }
        res.json(ai2ch6);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH6 = async (req, res) => {
    try {
        const ai2ch6 = await AI2CH6.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch6) {
            return res.status(404).json({ message: 'AI2CH6 not found' });
        }
        res.json(ai2ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH6 = async (req, res) => {
    try {
        const ai2ch6 = await AI2CH6.findByIdAndDelete(req.params.id);
        if (!ai2ch6) {
            return res.status(404).json({ message: 'AI2CH6 not found' });
        }
        res.json({ message: 'AI2CH6 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH6,
    getAllAI2CH6,
    getAI2CH6ById,
    updateAI2CH6,
    deleteAI2CH6
};
