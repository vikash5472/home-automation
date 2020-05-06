'use strict';

const deviceSchema = require('./../../config/schema/device.schema');

class DeviceModel {
    async getAll(skip, limit) {
        return await deviceSchema.find({}, { name: 1, type: 1, isSwitchedOn: 1 }).lean().skip(skip).limit(limit).exec();
    }

    async getOnebyId(deviceId) {
        return await deviceSchema.findOne({ _id: deviceId }).lean().exec();
    }

    async getOnebyIdAndUpdate(deviceId, updatedData) {
        return await deviceSchema.findOne({ _id: deviceId }).exec();
    }

    async deleteOneById(deviceId) {
        return await deviceSchema.deleteOne({ _id: deviceId }).lean().exec();
    }

    async createDevice(deviceData) {
        return await deviceSchema.create(deviceData).exec();
    }

}

module.exports = new DeviceModel;