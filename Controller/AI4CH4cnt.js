// Import the AI4CH4 model
// const AI2CH4 = require('../Model/AI2CH4');
const AI4CH4 = require('../Model/AI4CH4');

// Controller functions
const createAI4CH4 = async (req, res) => {
    try {
        const ai4ch4 = new AI4CH4(req.body);
        await ai4ch4.save();
        res.status(201).json(ai4ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllAI4CH4 = async (req, res) => {
    try {
        const ai4ch4s = await AI4CH4.find();
        res.json(ai4ch4s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAI4CH4ById = async (req, res) => {
    try {
        const ai4ch4 = await AI4CH4.findById(req.params.id);
        if (!ai4ch4) {
            return res.status(404).json({ message: 'AI4CH4 not found' });
        }
        res.json(ai4ch4);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAI4CH4 = async (req, res) => {
    try {
        const ai4ch4 = await AI4CH4.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ai4ch4) {
            return res.status(404).json({ message: 'AI4CH4 not found' });
        }
        res.json(ai4ch4);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAI4CH4 = async (req, res) => {
    try {
        const ai4ch4 = await AI4CH4.findByIdAndDelete(req.params.id);
        if (!ai4ch4) {
            return res.status(404).json({ message: 'AI4CH4 not found' });
        }
        res.json({ message: 'AI4CH4 deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAI4CH4,
    getAllAI4CH4,
    getAI4CH4ById,
    updateAI4CH4,
    deleteAI4CH4
};
