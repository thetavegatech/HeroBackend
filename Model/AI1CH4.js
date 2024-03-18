const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI1CH4_I_Scale_Min: { type: Number },
    AI1CH4_I_Scale_Max: { type: Number },
    AI1CH4_I_HH_Set_Value: { type: Number },
    AI1CH4_I_H_Set_Value: { type: Number },
    AI1CH4_I_L_Set_Value: { type: Number },
    AI1CH4_I_LL_Set_Value: { type: Number },
    AI1CH4_Trimmer_Set_Time: { type: Number },
    AI1CH4_Alarm_Set_Time: { type: Number },
    AI2CH4_Alarm_Reset_Bit: { type: Number },
    AI2CH4_FB_Enable: { type: Number },
    
});

const AI1CH4 = mongoose.model('AI1CH4', InputSchema);

module.exports = AI1CH4;