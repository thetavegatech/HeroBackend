// Import the AI1CH1 model
const AI1CH1 = require('../Model/AI1CH1');

// Controller functions
const createAI1CH1 = async (req, res) => {
    try {
        const ai1ch1 = new AI1CH1(req.body);
        await ai1ch1.save();
        res.status(201).json(ai1ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getAllAI1CH1 = async (req, res) => {
    try {
        const ai1ch1s = await AI1CH1.find();
        res.json(ai1ch1s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH1ById = async (req, res) => {
    try {
        const ai1ch1 = await AI1CH1.findById(req.params.id);
        if (!ai1ch1) {
            return res.status(404).json({ message: 'AI1CH1 not found' });
        }
        res.json(ai1ch1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH1 = async (req, res) => {
    try {
        const ai1ch1 = await AI1CH1.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch1) {
            return res.status(404).json({ message: 'AI1CH1 not found' });
        }
        res.json(ai1ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH1 = async (req, res) => {
    try {
        const ai1ch1 = await AI1CH1.findByIdAndDelete(req.params.id);
        if (!ai1ch1) {
            return res.status(404).json({ message: 'AI1CH1 not found' });
        }
        res.json({ message: 'AI1CH1 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH1,
    getAllAI1CH1,
    getAI1CH1ById,
    updateAI1CH1,
    deleteAI1CH1
};
