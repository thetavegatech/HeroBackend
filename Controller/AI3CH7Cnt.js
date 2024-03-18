// Import the AI7CH7 model
// const AI2CH7 = require('../Model/AI2CH7');
const AI3CH7 = require('../Model/AI3CH7');

// Controller functions
const createAI3CH7 = async (req, res) => {
    try {
        const ai3ch7 = new AI3CH7(req.body);
        await ai3ch7.save();
        res.status(201).json(ai3ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH7 = async (req, res) => {
    try {
        const ai3ch7s = await AI3CH7.find();
        res.json(ai3ch7s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH7ById = async (req, res) => {
    try {
        const ai3ch7 = await AI3CH7.findById(req.params.id);
        if (!ai3ch7) {
            return res.status(404).json({ message: 'AI3CH7 not found' });
        }
        res.json(ai3ch7);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH7 = async (req, res) => {
    try {
        const ai3ch7 = await AI3CH7.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch7) {
            return res.status(404).json({ message: 'AI3CH7 not found' });
        }
        res.json(ai3ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH7 = async (req, res) => {
    try {
        const ai3ch7 = await AI3CH7.findByIdAndDelete(req.params.id);
        if (!ai3ch7) {
            return res.status(404).json({ message: 'AI3CH7 not found' });
        }
        res.json({ message: 'AI3CH7 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH7,
    getAllAI3CH7,
    getAI3CH7ById,
    updateAI3CH7,
    deleteAI3CH7
};
