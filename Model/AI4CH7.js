const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI4CH7_I_Scale_Min: { type: Number },
    AI4CH7_I_Scale_Max: { type: Number },
    AI4CH7_I_HH_Set_Value: { type: Number },
    AI4CH7_I_H_Set_Value: { type: Number },
    AI4CH7_I_L_Set_Value: { type: Number },
    AI4CH7_I_LL_Set_Value: { type: Number },
    AI4CH7_Trimmer_Set_Time: { type: Number },
    AI4CH7_Alarm_Set_Time: { type: Number },
    AI4CH7_Alarm_Reset_Bit: { type: Number },
    AI4CH7_FB_Enable: { type: Number },
    
});

const AI4CH7 = mongoose.model('AI4CH7', InputSchema);

module.exports = AI4CH7;