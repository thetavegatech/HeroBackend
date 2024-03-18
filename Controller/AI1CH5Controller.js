// Import the AI1CH1 model
const AI1CH5 = require('../Model/AI1CH5');

// Controller functions
const createAI1CH5 = async (req, res) => {
    try {
        const ai1ch5 = new AI1CH5(req.body);
        await ai1ch5.save();
        res.status(201).json(ai1ch5);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllAI1CH5 = async (req, res) => {
    try {
        const ai1ch5s = await AI1CH5.find();
        res.json(ai1ch5s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI1CH5ById = async (req, res) => {
    try {
        const ai1ch5 = await AI1CH5.findById(req.params.id);
        if (!ai1ch5) {
            return res.status(404).json({ message: 'AI1CH5 not found' });
        }
        res.json(ai1ch5);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI1CH5 = async (req, res) => {
    try {
        const ai1ch5 = await AI1CH5.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai1ch5) {
            return res.status(404).json({ message: 'AI1CH5 not found' });
        }
        res.json(ai1ch5);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAI1CH5 = async (req, res) => {
    try {
        const ai1ch5 = await AI1CH5.findByIdAndDelete(req.params.id);
        if (!ai1ch5) {
            return res.status(404).json({ message: 'AI1CH5 not found' });
        }
        res.json({ message: 'AI1CH5 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI1CH5,
    getAllAI1CH5,
    getAI1CH5ById,
    updateAI1CH5,
    deleteAI1CH5
};
