const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongo schema for devices colelction 
const deviceSchema = new Schema({
    name: { type: String, required: true },
    status: { type: String, required: true, enum: ['paired', 'unpaired'] },
    type: { type: String, required: true, enum: ['light', 'swtich', 'bulb', null], default: null },
    isSwitchedOn: { type: Boolean, required: true, default: false }
}, { timestamps: true });

module.exports = mongoose.model('devices', deviceSchema);