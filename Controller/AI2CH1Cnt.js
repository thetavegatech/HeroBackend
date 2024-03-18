// Import the AI1CH1 model
const AI2CH1 = require('../Model/AI2CH1');

// Controller functions
const createAI2CH1 = async (req, res) => {
    try {
        const ai2ch1 = new AI2CH1(req.body);
        await ai2ch1.save();
        res.status(201).json(ai2ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH1 = async (req, res) => {
    try {
        const ai2ch1s = await AI2CH1.find();
        res.json(ai2ch1s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH1ById = async (req, res) => {
    try {
        const ai2ch1 = await AI2CH1.findById(req.params.id);
        if (!ai2ch1) {
            return res.status(404).json({ message: 'AI2CH1 not found' });
        }
        res.json(ai2ch1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH1 = async (req, res) => {
    try {
        const ai2ch1 = await AI2CH1.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch1) {
            return res.status(404).json({ message: 'AI2CH1 not found' });
        }
        res.json(ai2ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH1 = async (req, res) => {
    try {
        const ai2ch1 = await AI2CH1.findByIdAndDelete(req.params.id);
        if (!ai2ch1) {
            return res.status(404).json({ message: 'AI2CH1 not found' });
        }
        res.json({ message: 'AI2CH1 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH1,
    getAllAI2CH1,
    getAI2CH1ById,
    updateAI2CH1,
    deleteAI2CH1
};
