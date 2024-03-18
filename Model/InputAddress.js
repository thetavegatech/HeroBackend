const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI1CH1: { type: Number },
    AI1CH2: { type: Number },
    AI1CH3: { type: Number },
    AI1CH4: { type: Number },
    AI1CH5: { type: Number },
    AI1CH6: { type: Number },
    AI1CH7: { type: Number },
    AI1CH8: { type: Number },
    AI2CH1: { type: Number },
    AI2CH2: { type: Number },
    AI2CH3: { type: Number },
    AI2CH4: { type: Number },
    AI2CH5: { type: Number },
    AI2CH6: { type: Number },
    AI2CH7: { type: Number },
    AI2CH8: { type: Number },
    AI3CH1: { type: Number },
    AI3CH2: { type: Number },
    AI3CH3: { type: Number },
    AI3CH4: { type: Number },
    AI3CH5: { type: Number },
    AI3CH6: { type: Number },
    AI3CH7: { type: Number },
    AI3CH8: { type: Number },
    AI4CH1: { type: Number },
    AI4CH2: { type: Number },
    AI4CH3: { type: Number },
    AI4CH4: { type: Number },
    AI4CH5: { type: Number },
    AI4CH6: { type: Number },
    AI4CH7: { type: Number },
    AI4CH8: { type: Number },
    X37toX63: { type: Number },
    
});

const InputAddress = mongoose.model('InputAddress', InputSchema);

module.exports = InputAddress;