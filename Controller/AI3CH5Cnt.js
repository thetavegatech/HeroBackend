// Import the AI5CH5 model
// const AI2CH5 = require('../Model/AI2CH5');
const AI3CH5 = require('../Model/AI3CH5');

// Controller functions
const createAI3CH5 = async (req, res) => {
    try {
        const ai3ch5 = new AI3CH5(req.body);
        await ai3ch5.save();
        res.status(201).json(ai3ch5);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH5 = async (req, res) => {
    try {
        const ai3ch5s = await AI3CH5.find();
        res.json(ai3ch5s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH5ById = async (req, res) => {
    try {
        const ai3ch5 = await AI3CH5.findById(req.params.id);
        if (!ai3ch5) {
            return res.status(404).json({ message: 'AI3CH5 not found' });
        }
        res.json(ai3ch5);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH5 = async (req, res) => {
    try {
        const ai3ch5 = await AI3CH5.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch5) {
            return res.status(404).json({ message: 'AI3CH5 not found' });
        }
        res.json(ai3ch5);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH5 = async (req, res) => {
    try {
        const ai3ch5 = await AI3CH5.findByIdAndDelete(req.params.id);
        if (!ai3ch5) {
            return res.status(404).json({ message: 'AI3CH5 not found' });
        }
        res.json({ message: 'AI3CH5 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH5,
    getAllAI3CH5,
    getAI3CH5ById,
    updateAI3CH5,
    deleteAI3CH5
};
