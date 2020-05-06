'use strict';

const deviceSchema = require('./../../config/schema/device.schema');

class DeviceModel {
    async getAll(skip, limit) {
        return await deviceSchema.find({}, { name: 1, type: 1, isSwitchedOn: 1 }).lean().skip(skip).limit(limit).exec();
    }

}

module.exports = new DeviceModel;