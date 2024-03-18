// Import the AI6CH6 model
// const AI2CH6 = require('../Model/AI2CH6');
const AI4CH6 = require('../Model/AI4CH6');

// Controller functions
const createAI4CH6 = async (req, res) => {
    try {
        const ai4ch6 = new AI4CH6(req.body);
        await ai4ch6.save();
        res.status(201).json(ai4ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH6 = async (req, res) => {
    try {
        const ai4ch6s = await AI4CH6.find();
        res.json(ai4ch6s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH6ById = async (req, res) => {
    try {
        const ai4ch6 = await AI4CH6.findById(req.params.id);
        if (!ai4ch6) {
            return res.status(404).json({ message: 'AI4CH6 not found' });
        }
        res.json(ai4ch6);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH6 = async (req, res) => {
    try {
        const ai4ch6 = await AI4CH6.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch6) {
            return res.status(404).json({ message: 'AI4CH6 not found' });
        }
        res.json(ai4ch6);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH6 = async (req, res) => {
    try {
        const ai4ch6 = await AI4CH6.findByIdAndDelete(req.params.id);
        if (!ai4ch6) {
            return res.status(404).json({ message: 'AI4CH6 not found' });
        }
        res.json({ message: 'AI4CH6 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH6,
    getAllAI4CH6,
    getAI4CH6ById,
    updateAI4CH6,
    deleteAI4CH6
};
