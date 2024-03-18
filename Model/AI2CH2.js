const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI2CH2_I_Scale_Min: { type: Number },
    AI2CH2_I_Scale_Max: { type: Number },
    AI2CH2_I_HH_Set_Value: { type: Number },
    AI1CH_I_H_Set_Value: { type: Number },
    AI2CH2_I_L_Set_Value: { type: Number },
    AI2CH2_I_LL_Set_Value: { type: Number },
    AI2CH2_Trimmer_Set_Time: { type: Number },
    AI2CH2_Alarm_Set_Time: { type: Number },
    AI2CH2_Alarm_Reset_Bit: { type: Number },
    AI2CH2_FB_Enable: { type: Number },
    
});

const AI2CH2 = mongoose.model('AI2CH2', InputSchema);

module.exports = AI2CH2;