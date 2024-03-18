const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI3CH7_I_Scale_Min: { type: Number },
    AI3CH7_I_Scale_Max: { type: Number },
    AI3CH7_I_HH_Set_Value: { type: Number },
    AI3CH7_I_H_Set_Value: { type: Number },
    AI3CH7_I_L_Set_Value: { type: Number },
    AI3CH7_I_LL_Set_Value: { type: Number },
    AI3CH7_Trimmer_Set_Time: { type: Number },
    AI3CH7_Alarm_Set_Time: { type: Number },
    AI3CH7_Alarm_Reset_Bit: { type: Number },
    AI3CH7_FB_Enable: { type: Number },
    
});

const AI3CH7 = mongoose.model('AI3CH7', InputSchema);

module.exports = AI3CH7;