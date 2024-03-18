// Import the AI1CH1 model
const AI1CH4 = require('../Model/AI1CH4');

// Controller functions
const createAI1CH4 = async (req, res) => {
    try {
        const ai1ch4 = new AI1CH4(req.body);
        await ai1ch4.save();
        res.status(201).json(ai1ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI1CH4 = async (req, res) => {
    try {
        const ai1ch4s = await AI1CH4.find();
        res.json(ai1ch4s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH4ById = async (req, res) => {
    try {
        const ai1ch4 = await AI1CH4.findById(req.params.id);
        if (!ai1ch4) {
            return res.status(404).json({ message: 'AI1CH4 not found' });
        }
        res.json(ai1ch4);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH4 = async (req, res) => {
    try {
        const ai1ch4 = await AI1CH4.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch4) {
            return res.status(404).json({ message: 'AI1CH4 not found' });
        }
        res.json(ai1ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI1CH4 = async (req, res) => {
    try {
        const ai1ch4 = await AI1CH4.findByIdAndDelete(req.params.id);
        if (!ai1ch4) {
            return res.status(404).json({ message: 'AI1CH4 not found' });
        }
        res.json({ message: 'AI1CH4 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH4,
    getAllAI1CH4,
    getAI1CH4ById,
    updateAI1CH4,
    deleteAI1CH4
};
