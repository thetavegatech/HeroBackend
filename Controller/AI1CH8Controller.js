// Import the AI1CH1 model
const AI1CH8 = require('../Model/AI1CH8');

// Controller functions
const createAI1CH8 = async (req, res) => {
    try {
        const ai1ch8 = new AI1CH8(req.body);
        await ai1ch8.save();
        res.status(201).json(ai1ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI1CH8 = async (req, res) => {
    try {
        const ai1ch8s = await AI1CH8.find();
        res.json(ai1ch8s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH8ById = async (req, res) => {
    try {
        const ai1ch8 = await AI1CH8.findById(req.params.id);
        if (!ai1ch8) {
            return res.status(404).json({ message: 'AI1CH8 not found' });
        }
        res.json(ai1ch8);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH8 = async (req, res) => {
    try {
        const ai1ch8 = await AI1CH8.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch8) {
            return res.status(404).json({ message: 'AI1CH8 not found' });
        }
        res.json(ai1ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH8 = async (req, res) => {
    try {
        const ai1ch8 = await AI1CH8.findByIdAndDelete(req.params.id);
        if (!ai1ch8) {
            return res.status(404).json({ message: 'AI1CH8 not found' });
        }
        res.json({ message: 'AI1CH8 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH8,
    getAllAI1CH8,
    getAI1CH8ById,
    updateAI1CH8,
    deleteAI1CH8
};
