// Import the AI1CH1 model
const AI1CH2 = require('../Model/AI1CH2');

// Controller functions
const createAI1CH2 = async (req, res) => {
    try {
        const ai1ch2 = new AI1CH2(req.body);
        await ai1ch2.save();
        res.status(201).json(ai1ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI1CH2 = async (req, res) => {
    try {
        const ai1ch2s = await AI1CH2.find();
        res.json(ai1ch2s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH2ById = async (req, res) => {
    try {
        const ai1ch2 = await AI1CH2.findById(req.params.id);
        if (!ai1ch2) {
            return res.status(404).json({ message: 'AI1CH2 not found' });
        }
        res.json(ai1ch2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH2 = async (req, res) => {
    try {
        const ai1ch2 = await AI1CH2.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch2) {
            return res.status(404).json({ message: 'AI1CH2 not found' });
        }
        res.json(ai1ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH2 = async (req, res) => {
    try {
        const ai1ch2 = await AI1CH2.findByIdAndDelete(req.params.id);
        if (!ai1ch2) {
            return res.status(404).json({ message: 'AI1CH2 not found' });
        }
        res.json({ message: 'AI1CH2 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH2,
    getAllAI1CH2,
    getAI1CH2ById,
    updateAI1CH2,
    deleteAI1CH2
};
