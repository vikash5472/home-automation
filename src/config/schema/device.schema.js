const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    name: { type: String, required: true },
    status: { type: String, required: true, enum: ['new', 'paired', 'unpaired'] },
    type: { type: String, required: true, enum: ['light', 'swtich', null], default: null },
    isSwitchedOn: { type: Boolean, required: true, default: false }
}, { timestamps: true });

module.exports = mongoose.model('devices', deviceSchema);