// Import the AI5CH5 model
// const AI2CH5 = require('../Model/AI2CH5');
const AI4CH5 = require('../Model/AI4CH5');

// Controller functions
const createAI4CH5 = async (req, res) => {
    try {
        const ai4ch5 = new AI4CH5(req.body);
        await ai4ch5.save();
        res.status(201).json(ai4ch5);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH5 = async (req, res) => {
    try {
        const ai4ch5s = await AI4CH5.find();
        res.json(ai4ch5s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH5ById = async (req, res) => {
    try {
        const ai4ch5 = await AI4CH5.findById(req.params.id);
        if (!ai4ch5) {
            return res.status(404).json({ message: 'AI4CH5 not found' });
        }
        res.json(ai4ch5);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH5 = async (req, res) => {
    try {
        const ai4ch5 = await AI4CH5.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch5) {
            return res.status(404).json({ message: 'AI4CH5 not found' });
        }
        res.json(ai4ch5);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH5 = async (req, res) => {
    try {
        const ai4ch5 = await AI4CH5.findByIdAndDelete(req.params.id);
        if (!ai4ch5) {
            return res.status(404).json({ message: 'AI4CH5 not found' });
        }
        res.json({ message: 'AI4CH5 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH5,
    getAllAI4CH5,
    getAI4CH5ById,
    updateAI4CH5,
    deleteAI4CH5
};
