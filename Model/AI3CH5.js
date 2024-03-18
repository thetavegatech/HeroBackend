const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    AI3CH5_I_Scale_Min: { type: Number },
    AI3CH5_I_Scale_Max: { type: Number },
    AI3CH5_I_HH_Set_Value: { type: Number },
    AI3CH5_I_H_Set_Value: { type: Number },
    AI3CH5_I_L_Set_Value: { type: Number },
    AI3CH5_I_LL_Set_Value: { type: Number },
    AI3CH5_Trimmer_Set_Time: { type: Number },
    AI3CH5_Alarm_Set_Time: { type: Number },
    AI3CH5_Alarm_Reset_Bit: { type: Number },
    AI3CH5_FB_Enable: { type: Number },
    
});

const AI3CH5 = mongoose.model('AI3CH5', InputSchema);

module.exports = AI3CH5;