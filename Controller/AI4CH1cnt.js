// Import the AI1CH1 model
// const AI2CH1 = require('../Model/AI2CH1');
const AI4CH1 = require('../Model/AI4CH1');

// Controller functions
const createAI4CH1 = async (req, res) => {
    try {
        const ai4ch1 = new AI4CH1(req.body);
        await ai4ch1.save();
        res.status(201).json(ai4ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH1 = async (req, res) => {
    try {
        const ai4ch1s = await AI4CH1.find();
        res.json(ai4ch1s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH1ById = async (req, res) => {
    try {
        const ai4ch1 = await AI4CH1.findById(req.params.id);
        if (!ai4ch1) {
            return res.status(404).json({ message: 'AI4CH1 not found' });
        }
        res.json(ai4ch1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH1 = async (req, res) => {
    try {
        const ai4ch1 = await AI4CH1.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch1) {
            return res.status(404).json({ message: 'AI4CH1 not found' });
        }
        res.json(ai4ch1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH1 = async (req, res) => {
    try {
        const ai4ch1 = await AI4CH1.findByIdAndDelete(req.params.id);
        if (!ai4ch1) {
            return res.status(404).json({ message: 'AI4CH1 not found' });
        }
        res.json({ message: 'AI4CH1 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH1,
    getAllAI4CH1,
    getAI4CH1ById,
    updateAI4CH1,
    deleteAI4CH1
};
