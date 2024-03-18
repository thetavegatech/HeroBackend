// Import the AI4CH4 model
// const AI2CH4 = require('../Model/AI2CH4');
const AI3CH4 = require('../Model/AI3CH4');

// Controller functions
const createAI3CH4 = async (req, res) => {
    try {
        const ai3ch4 = new AI3CH4(req.body);
        await ai3ch4.save();
        res.status(201).json(ai3ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI3CH4 = async (req, res) => {
    try {
        const ai3ch4s = await AI3CH4.find();
        res.json(ai3ch4s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI3CH4ById = async (req, res) => {
    try {
        const ai3ch4 = await AI3CH4.findById(req.params.id);
        if (!ai3ch4) {
            return res.status(404).json({ message: 'AI3CH4 not found' });
        }
        res.json(ai3ch4);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI3CH4 = async (req, res) => {
    try {
        const ai3ch4 = await AI3CH4.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai3ch4) {
            return res.status(404).json({ message: 'AI3CH4 not found' });
        }
        res.json(ai3ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI3CH4 = async (req, res) => {
    try {
        const ai3ch4 = await AI3CH4.findByIdAndDelete(req.params.id);
        if (!ai3ch4) {
            return res.status(404).json({ message: 'AI3CH4 not found' });
        }
        res.json({ message: 'AI3CH4 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI3CH4,
    getAllAI3CH4,
    getAI3CH4ById,
    updateAI3CH4,
    deleteAI3CH4
};
