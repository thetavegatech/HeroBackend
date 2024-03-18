// Import the AI1CH1 model
// const AI2CH1 = require('../Model/AI2CH1');
const AI3CH1 = require('../Model/AI3CH1');

// Controller functions
const createAI3CH1 = async (req, res) => {
    try {
        const ai3ch1 = new AI3CH1(req.body);
        await ai3ch1.save();
        res.status(201).json(ai3ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH1 = async (req, res) => {
    try {
        const ai3ch1s = await AI3CH1.find();
        res.json(ai3ch1s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH1ById = async (req, res) => {
    try {
        const ai3ch1 = await AI3CH1.findById(req.params.id);
        if (!ai3ch1) {
            return res.status(404).json({ message: 'AI3CH1 not found' });
        }
        res.json(ai3ch1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH1 = async (req, res) => {
    try {
        const ai3ch1 = await AI3CH1.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch1) {
            return res.status(404).json({ message: 'AI3CH1 not found' });
        }
        res.json(ai3ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH1 = async (req, res) => {
    try {
        const ai3ch1 = await AI3CH1.findByIdAndDelete(req.params.id);
        if (!ai3ch1) {
            return res.status(404).json({ message: 'AI3CH1 not found' });
        }
        res.json({ message: 'AI3CH1 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH1,
    getAllAI3CH1,
    getAI3CH1ById,
    updateAI3CH1,
    deleteAI3CH1
};
