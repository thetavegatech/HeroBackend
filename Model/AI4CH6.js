const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI4CH6_I_Scale_Min: { type: Number },
    AI4CH6_I_Scale_Max: { type: Number },
    AI4CH6_I_HH_Set_Value: { type: Number },
    AI4CH6_I_H_Set_Value: { type: Number },
    AI4CH6_I_L_Set_Value: { type: Number },
    AI4CH6_I_LL_Set_Value: { type: Number },
    AI4CH6_Trimmer_Set_Time: { type: Number },
    AI4CH6_Alarm_Set_Time: { type: Number },
    AI4CH6_Alarm_Reset_Bit: { type: Number },
    AI4CH6_FB_Enable: { type: Number },
    
});

const AI4CH6 = mongoose.model('AI4CH6', InputSchema);

module.exports = AI4CH6;