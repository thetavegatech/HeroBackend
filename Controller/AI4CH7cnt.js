// Import the AI7CH7 model
// const AI2CH7 = require('../Model/AI2CH7');
const AI4CH7 = require('../Model/AI4CH7');

// Controller functions
const createAI4CH7 = async (req, res) => {
    try {
        const ai4ch7 = new AI4CH7(req.body);
        await ai4ch7.save();
        res.status(201).json(ai4ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH7 = async (req, res) => {
    try {
        const ai4ch7s = await AI4CH7.find();
        res.json(ai4ch7s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH7ById = async (req, res) => {
    try {
        const ai4ch7 = await AI4CH7.findById(req.params.id);
        if (!ai4ch7) {
            return res.status(404).json({ message: 'AI4CH7 not found' });
        }
        res.json(ai4ch7);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH7 = async (req, res) => {
    try {
        const ai4ch7 = await AI4CH7.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch7) {
            return res.status(404).json({ message: 'AI4CH7 not found' });
        }
        res.json(ai4ch7);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH7 = async (req, res) => {
    try {
        const ai4ch7 = await AI4CH7.findByIdAndDelete(req.params.id);
        if (!ai4ch7) {
            return res.status(404).json({ message: 'AI4CH7 not found' });
        }
        res.json({ message: 'AI4CH7 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH7,
    getAllAI4CH7,
    getAI4CH7ById,
    updateAI4CH7,
    deleteAI4CH7
};
