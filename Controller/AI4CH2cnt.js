// Import the AI2CH2 model
// const AI2CH2 = require('../Model/AI2CH2');
const AI4CH2 = require('../Model/AI4CH2');

// Controller functions
const createAI4CH2 = async (req, res) => {
    try {
        const ai4ch2 = new AI4CH2(req.body);
        await ai4ch2.save();
        res.status(201).json(ai4ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH2 = async (req, res) => {
    try {
        const ai4ch2s = await AI4CH2.find();
        res.json(ai4ch2s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH2ById = async (req, res) => {
    try {
        const ai4ch2 = await AI4CH2.findById(req.params.id);
        if (!ai4ch2) {
            return res.status(404).json({ message: 'AI4CH2 not found' });
        }
        res.json(ai4ch2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH2 = async (req, res) => {
    try {
        const ai4ch2 = await AI4CH2.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch2) {
            return res.status(404).json({ message: 'AI4CH2 not found' });
        }
        res.json(ai4ch2);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH2 = async (req, res) => {
    try {
        const ai4ch2 = await AI4CH2.findByIdAndDelete(req.params.id);
        if (!ai4ch2) {
            return res.status(404).json({ message: 'AI4CH2 not found' });
        }
        res.json({ message: 'AI4CH2 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH2,
    getAllAI4CH2,
    getAI4CH2ById,
    updateAI4CH2,
    deleteAI4CH2
};
