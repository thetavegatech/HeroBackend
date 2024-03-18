const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI1CH6_I_Scale_Min: { type: Number },
    AI1CH6_I_Scale_Max: { type: Number },
    AI1CH6_I_HH_Set_Value: { type: Number },
    AI1CH_I_H_Set_Value: { type: Number },
    AI1CH6_I_L_Set_Value: { type: Number },
    AI1CH6_I_LL_Set_Value: { type: Number },
    AI1CH6_Trimmer_Set_Time: { type: Number },
    AI1CH6_Alarm_Set_Time: { type: Number },
    AI1CH6_Alarm_Reset_Bit: { type: Number },
    AI1CH6_FB_Enable: { type: Number },
    
});

const AI1CH6 = mongoose.model('AI1CH6', InputSchema);

module.exports = AI1CH6;