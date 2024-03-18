// Import the AI8CH8 model
const AI2CH8 = require('../Model/AI2CH8');

// Controller functions
const createAI2CH8 = async (req, res) => {
    try {
        const ai2ch8 = new AI2CH8(req.body);
        await ai2ch8.save();
        res.status(208).json(ai2ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH8 = async (req, res) => {
    try {
        const ai2ch8s = await AI2CH8.find();
        res.json(ai2ch8s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH8ById = async (req, res) => {
    try {
        const ai2ch8 = await AI2CH8.findById(req.params.id);
        if (!ai2ch8) {
            return res.status(404).json({ message: 'AI2CH8 not found' });
        }
        res.json(ai2ch8);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH8 = async (req, res) => {
    try {
        const ai2ch8 = await AI2CH8.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch8) {
            return res.status(404).json({ message: 'AI2CH8 not found' });
        }
        res.json(ai2ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH8 = async (req, res) => {
    try {
        const ai2ch8 = await AI2CH8.findByIdAndDelete(req.params.id);
        if (!ai2ch8) {
            return res.status(404).json({ message: 'AI2CH8 not found' });
        }
        res.json({ message: 'AI2CH8 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH8,
    getAllAI2CH8,
    getAI2CH8ById,
    updateAI2CH8,
    deleteAI2CH8
};
