// Import the AI1CH1 model
const AI1CH7 = require('../Model/AI1CH7');

// Controller functions
const createAI1CH7 = async (req, res) => {
    try {
        const ai1ch7 = new AI1CH7(req.body);
        await ai1ch7.save();
        res.status(201).json(ai1ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI1CH7 = async (req, res) => {
    try {
        const ai1ch7s = await AI1CH7.find();
        res.json(ai1ch7s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH7ById = async (req, res) => {
    try {
        const ai1ch7 = await AI1CH7.findById(req.params.id);
        if (!ai1ch7) {
            return res.status(404).json({ message: 'AI1CH7 not found' });
        }
        res.json(ai1ch7);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH7 = async (req, res) => {
    try {
        const ai1ch7 = await AI1CH7.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch7) {
            return res.status(404).json({ message: 'AI1CH7 not found' });
        }
        res.json(ai1ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH7 = async (req, res) => {
    try {
        const ai1ch7 = await AI1CH7.findByIdAndDelete(req.params.id);
        if (!ai1ch7) {
            return res.status(404).json({ message: 'AI1CH7 not found' });
        }
        res.json({ message: 'AI1CH7 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH7,
    getAllAI1CH7,
    getAI1CH7ById,
    updateAI1CH7,
    deleteAI1CH7
};
