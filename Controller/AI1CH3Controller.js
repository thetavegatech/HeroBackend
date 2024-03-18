// Import the AI1CH1 model
const AI1CH3 = require('../Model/AI1CH3');

// Controller functions
const createAI1CH3 = async (req, res) => {
    try {
        const ai1ch3 = new AI1CH3(req.body);
        await ai1ch3.save();
        res.status(201).json(ai1ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI1CH3 = async (req, res) => {
    try {
        const ai1ch3s = await AI1CH3.find();
        res.json(ai1ch3s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH3ById = async (req, res) => {
    try {
        const ai1ch3 = await AI1CH3.findById(req.params.id);
        if (!ai1ch3) {
            return res.status(404).json({ message: 'AI1CH3 not found' });
        }
        res.json(ai1ch3);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH3 = async (req, res) => {
    try {
        const ai1ch3 = await AI1CH3.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch3) {
            return res.status(404).json({ message: 'AI1CH3 not found' });
        }
        res.json(ai1ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH3 = async (req, res) => {
    try {
        const ai1ch3 = await AI1CH3.findByIdAndDelete(req.params.id);
        if (!ai1ch3) {
            return res.status(404).json({ message: 'AI1CH3 not found' });
        }
        res.json({ message: 'AI1CH3 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH3,
    getAllAI1CH3,
    getAI1CH3ById,
    updateAI1CH3,
    deleteAI1CH3
};
