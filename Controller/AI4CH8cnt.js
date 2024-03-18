// Import the AI8CH8 model
// const AI2CH8 = require('../Model/AI2CH8');
const AI4CH8 = require('../Model/AI4CH8');

// Controller functions
const createAI4CH8 = async (req, res) => {
    try {
        const ai4ch8 = new AI4CH8(req.body);
        await ai4ch8.save();
        res.status(201).json(ai4ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH8 = async (req, res) => {
    try {
        const ai4ch8s = await AI4CH8.find();
        res.json(ai4ch8s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH8ById = async (req, res) => {
    try {
        const ai4ch8 = await AI4CH8.findById(req.params.id);
        if (!ai4ch8) {
            return res.status(404).json({ message: 'AI4CH8 not found' });
        }
        res.json(ai4ch8);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH8 = async (req, res) => {
    try {
        const ai4ch8 = await AI4CH8.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch8) {
            return res.status(404).json({ message: 'AI4CH8 not found' });
        }
        res.json(ai4ch8);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH8 = async (req, res) => {
    try {
        const ai4ch8 = await AI4CH8.findByIdAndDelete(req.params.id);
        if (!ai4ch8) {
            return res.status(404).json({ message: 'AI4CH8 not found' });
        }
        res.json({ message: 'AI4CH8 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH8,
    getAllAI4CH8,
    getAI4CH8ById,
    updateAI4CH8,
    deleteAI4CH8
};
