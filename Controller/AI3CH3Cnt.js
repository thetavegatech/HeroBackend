// Import the AI3CH3 model
// const AI2CH3 = require('../Model/AI2CH3');
const AI3CH3 = require('../Model/AI3CH3');

// Controller functions
const createAI3CH3 = async (req, res) => {
    try {
        const ai3ch3 = new AI3CH3(req.body);
        await ai3ch3.save();
        res.status(201).json(ai3ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH3 = async (req, res) => {
    try {
        const ai3ch3s = await AI3CH3.find();
        res.json(ai3ch3s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH3ById = async (req, res) => {
    try {
        const ai3ch3 = await AI3CH3.findById(req.params.id);
        if (!ai3ch3) {
            return res.status(404).json({ message: 'AI3CH3 not found' });
        }
        res.json(ai3ch3);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH3 = async (req, res) => {
    try {
        const ai3ch3 = await AI3CH3.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch3) {
            return res.status(404).json({ message: 'AI3CH3 not found' });
        }
        res.json(ai3ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH3 = async (req, res) => {
    try {
        const ai3ch3 = await AI3CH3.findByIdAndDelete(req.params.id);
        if (!ai3ch3) {
            return res.status(404).json({ message: 'AI3CH3 not found' });
        }
        res.json({ message: 'AI3CH3 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH3,
    getAllAI3CH3,
    getAI3CH3ById,
    updateAI3CH3,
    deleteAI3CH3
};
