// Import the AI1CH1 model
const AI1CH6 = require('../Model/AI1CH6');

// Controller functions
const createAI1CH6 = async (req, res) => {
    try {
        const ai1ch6 = new AI1CH6(req.body);
        await ai1ch6.save();
        res.status(201).json(ai1ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI1CH6 = async (req, res) => {
    try {
        const ai1ch6s = await AI1CH6.find();
        res.json(ai1ch6s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH6ById = async (req, res) => {
    try {
        const ai1ch6 = await AI1CH6.findById(req.params.id);
        if (!ai1ch6) {
            return res.status(404).json({ message: 'AI1CH6 not found' });
        }
        res.json(ai1ch6);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH6 = async (req, res) => {
    try {
        const ai1ch6 = await AI1CH6.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch6) {
            return res.status(404).json({ message: 'AI1CH6 not found' });
        }
        res.json(ai1ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH6 = async (req, res) => {
    try {
        const ai1ch6 = await AI1CH6.findByIdAndDelete(req.params.id);
        if (!ai1ch6) {
            return res.status(404).json({ message: 'AI1CH6 not found' });
        }
        res.json({ message: 'AI1CH6 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH6,
    getAllAI1CH6,
    getAI1CH6ById,
    updateAI1CH6,
    deleteAI1CH6
};
