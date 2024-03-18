const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI2CH5_I_Scale_Min: { type: Number },
    AI2CH5_I_Scale_Max: { type: Number },
    AI2CH5_I_HH_Set_Value: { type: Number },
    AI2CH5_I_H_Set_Value: { type: Number },
    AI2CH5_I_L_Set_Value: { type: Number },
    AI2CH5_I_LL_Set_Value: { type: Number },
    AI2CH5_Trimmer_Set_Time: { type: Number },
    AI2CH5_Alarm_Set_Time: { type: Number },
    AI2CH5_Alarm_Reset_Bit: { type: Number },
    AI2CH5_FB_Enable: { type: Number },
    
});

const AI2CH5 = mongoose.model('AI2CH5', InputSchema);

module.exports = AI2CH5;