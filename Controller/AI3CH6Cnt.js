// Import the AI6CH6 model
// const AI2CH6 = require('../Model/AI2CH6');
const AI3CH6 = require('../Model/AI3CH6');

// Controller functions
const createAI3CH6 = async (req, res) => {
    try {
        const ai3ch6 = new AI3CH6(req.body);
        await ai3ch6.save();
        res.status(201).json(ai3ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH6 = async (req, res) => {
    try {
        const ai3ch6s = await AI3CH6.find();
        res.json(ai3ch6s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH6ById = async (req, res) => {
    try {
        const ai3ch6 = await AI3CH6.findById(req.params.id);
        if (!ai3ch6) {
            return res.status(404).json({ message: 'AI3CH6 not found' });
        }
        res.json(ai3ch6);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH6 = async (req, res) => {
    try {
        const ai3ch6 = await AI3CH6.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch6) {
            return res.status(404).json({ message: 'AI3CH6 not found' });
        }
        res.json(ai3ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH6 = async (req, res) => {
    try {
        const ai3ch6 = await AI3CH6.findByIdAndDelete(req.params.id);
        if (!ai3ch6) {
            return res.status(404).json({ message: 'AI3CH6 not found' });
        }
        res.json({ message: 'AI3CH6 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH6,
    getAllAI3CH6,
    getAI3CH6ById,
    updateAI3CH6,
    deleteAI3CH6
};
