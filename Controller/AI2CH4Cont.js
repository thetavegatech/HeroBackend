// Import the AI4CH4 model
const AI2CH4 = require('../Model/AI2CH4');

// Controller functions
const createAI2CH4 = async (req, res) => {
    try {
        const ai2ch4 = new AI2CH4(req.body);
        await ai2ch4.save();
        res.status(201).json(ai2ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI2CH4 = async (req, res) => {
    try {
        const ai2ch4s = await AI2CH4.find();
        res.json(ai2ch4s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI2CH4ById = async (req, res) => {
    try {
        const ai2ch4 = await AI2CH4.findById(req.params.id);
        if (!ai2ch4) {
            return res.status(404).json({ message: 'AI2CH4 not found' });
        }
        res.json(ai2ch4);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI2CH4 = async (req, res) => {
    try {
        const ai2ch4 = await AI2CH4.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai2ch4) {
            return res.status(404).json({ message: 'AI2CH4 not found' });
        }
        res.json(ai2ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI2CH4 = async (req, res) => {
    try {
        const ai2ch4 = await AI2CH4.findByIdAndDelete(req.params.id);
        if (!ai2ch4) {
            return res.status(404).json({ message: 'AI2CH4 not found' });
        }
        res.json({ message: 'AI2CH4 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI2CH4,
    getAllAI2CH4,
    getAI2CH4ById,
    updateAI2CH4,
    deleteAI2CH4
};
