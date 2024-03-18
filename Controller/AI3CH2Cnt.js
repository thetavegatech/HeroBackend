// Import the AI2CH2 model
// const AI2CH2 = require('../Model/AI2CH2');
const AI3CH2 = require('../Model/AI3CH2');

// Controller functions
const createAI3CH2 = async (req, res) => {
    try {
        const ai3ch2 = new AI3CH2(req.body);
        await ai3ch2.save();
        res.status(201).json(ai3ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH2 = async (req, res) => {
    try {
        const ai3ch2s = await AI3CH2.find();
        res.json(ai3ch2s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH2ById = async (req, res) => {
    try {
        const ai3ch2 = await AI3CH2.findById(req.params.id);
        if (!ai3ch2) {
            return res.status(404).json({ message: 'AI3CH2 not found' });
        }
        res.json(ai3ch2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH2 = async (req, res) => {
    try {
        const ai3ch2 = await AI3CH2.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch2) {
            return res.status(404).json({ message: 'AI3CH2 not found' });
        }
        res.json(ai3ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH2 = async (req, res) => {
    try {
        const ai3ch2 = await AI3CH2.findByIdAndDelete(req.params.id);
        if (!ai3ch2) {
            return res.status(404).json({ message: 'AI3CH2 not found' });
        }
        res.json({ message: 'AI3CH2 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH2,
    getAllAI3CH2,
    getAI3CH2ById,
    updateAI3CH2,
    deleteAI3CH2
};
