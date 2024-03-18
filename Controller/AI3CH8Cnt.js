// Import the AI8CH8 model
// const AI2CH8 = require('../Model/AI2CH8');
const AI3CH8 = require('../Model/AI3CH8');

// Controller functions
const createAI3CH8 = async (req, res) => {
    try {
        const ai3ch8 = new AI3CH8(req.body);
        await ai3ch8.save();
        res.status(201).json(ai3ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH8 = async (req, res) => {
    try {
        const ai3ch8s = await AI3CH8.find();
        res.json(ai3ch8s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH8ById = async (req, res) => {
    try {
        const ai3ch8 = await AI3CH8.findById(req.params.id);
        if (!ai3ch8) {
            return res.status(404).json({ message: 'AI3CH8 not found' });
        }
        res.json(ai3ch8);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH8 = async (req, res) => {
    try {
        const ai3ch8 = await AI3CH8.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch8) {
            return res.status(404).json({ message: 'AI3CH8 not found' });
        }
        res.json(ai3ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH8 = async (req, res) => {
    try {
        const ai3ch8 = await AI3CH8.findByIdAndDelete(req.params.id);
        if (!ai3ch8) {
            return res.status(404).json({ message: 'AI3CH8 not found' });
        }
        res.json({ message: 'AI3CH8 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH8,
    getAllAI3CH8,
    getAI3CH8ById,
    updateAI3CH8,
    deleteAI3CH8
};
