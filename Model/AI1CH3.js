const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI1CH3_I_Scale_Min: { type: Number },
    AI1CH3_I_Scale_Max: { type: Number },
    AI1CH3_I_HH_Set_Value: { type: Number },
    AI1CH3_I_H_Set_Value: { type: Number },
    AI1CH3_I_L_Set_Value: { type: Number },
    AI1CH3_I_LL_Set_Value: { type: Number },
    AI1CH3_Trimmer_Set_Time: { type: Number },
    AI1CH3_Alarm_Set_Time: { type: Number },
    AI2CH3_Alarm_Reset_Bit: { type: Number },
    AI2CH3_FB_Enable: { type: Number },
    
});

const AI1CH3 = mongoose.model('AI1CH3', InputSchema);

module.exports = AI1CH3;