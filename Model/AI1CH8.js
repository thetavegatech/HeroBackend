const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI1CH8_I_Scale_Min: { type: Number },
    AI1CH8_I_Scale_Max: { type: Number },
    AI1CH8_I_HH_Set_Value: { type: Number },
    AI1CH_I_H_Set_Value: { type: Number },
    AI1CH8_I_L_Set_Value: { type: Number },
    AI1CH8_I_LL_Set_Value: { type: Number },
    AI1CH8_Trimmer_Set_Time: { type: Number },
    AI1CH8_Alarm_Set_Time: { type: Number },
    AI1CH8_Alarm_Reset_Bit: { type: Number },
    AI1CH8_FB_Enable: { type: Number },
    
});

const AI1CH8 = mongoose.model('AI1CH8', InputSchema);

module.exports = AI1CH8;