// Import the AI3CH3 model
// const AI2CH3 = require('../Model/AI2CH3');
const AI4CH3 = require('../Model/AI4CH3');

// Controller functions
const createAI4CH3 = async (req, res) => {
    try {
        const ai4ch3 = new AI4CH3(req.body);
        await ai4ch3.save();
        res.status(201).json(ai4ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH3 = async (req, res) => {
    try {
        const ai4ch3s = await AI4CH3.find();
        res.json(ai4ch3s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH3ById = async (req, res) => {
    try {
        const ai4ch3 = await AI4CH3.findById(req.params.id);
        if (!ai4ch3) {
            return res.status(404).json({ message: 'AI4CH3 not found' });
        }
        res.json(ai4ch3);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH3 = async (req, res) => {
    try {
        const ai4ch3 = await AI4CH3.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch3) {
            return res.status(404).json({ message: 'AI4CH3 not found' });
        }
        res.json(ai4ch3);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH3 = async (req, res) => {
    try {
        const ai4ch3 = await AI4CH3.findByIdAndDelete(req.params.id);
        if (!ai4ch3) {
            return res.status(404).json({ message: 'AI4CH3 not found' });
        }
        res.json({ message: 'AI4CH3 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH3,
    getAllAI4CH3,
    getAI4CH3ById,
    updateAI4CH3,
    deleteAI4CH3
};
