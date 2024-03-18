const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI4CH8_I_Scale_Min: { type: Number },
    AI4CH8_I_Scale_Max: { type: Number },
    AI4CH8_I_HH_Set_Value: { type: Number },
    AI4CH8_I_H_Set_Value: { type: Number },
    AI4CH8_I_L_Set_Value: { type: Number },
    AI4CH8_I_LL_Set_Value: { type: Number },
    AI4CH8_Trimmer_Set_Time: { type: Number },
    AI4CH8_Alarm_Set_Time: { type: Number },
    AI4CH8_Alarm_Reset_Bit: { type: Number },
    AI4CH8_FB_Enable: { type: Number },
    
});

const AI4CH8 = mongoose.model('AI4CH8', InputSchema);

module.exports = AI4CH8;