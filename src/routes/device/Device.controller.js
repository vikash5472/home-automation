'use strict';
const deviceModel = require('./Device.model');

class DeviceController {

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DeviceController
     * @description get all device Info
     */
    async deviceList(req, res, next) {
        try {
            let allDevices = await deviceModel.getAll();
            if (allDevices.length > 0) {
                res.status(200).json({ code: 200, error: null, data: allDevices, message: 'Devices found' });
            } else {
                res.status(404).json({ code: 404, error: 'Not Found', data: allDevices, message: 'Devices not found' });
            }
        } catch (err) {
            next(err);
        }
    }

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DeviceController
     * @description get one device Info
     */
    async deviceSingleDevice(req, res, next) {
        try {
            const deviceId = req.params.deviceId;
            let deviceData = await deviceModel.getOnebyId(deviceId);
            if (deviceData) {
                res.status(200).json({ code: 200, error: null, data: deviceData, message: 'Devices found' });
            } else {
                res.status(404).json({ code: 404, error: 'Not Found', data: deviceData, message: 'Device not found' });
            }
        } catch (err) {
            next(err);
        }
    }

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DeviceController
     * @description delete a device Info
     */
    async deleteOneDevice(req, res, next) {
        try {
            const deviceId = req.params.deviceId;
            let deviceData = await deviceModel.deleteOneById(deviceId);
            if (allDevices) {
                res.status(200).json({ code: 200, error: null, data: deviceData._id, message: 'Devices deleted successfully' });
            } else {
                res.status(404).json({ code: 404, error: 'Not Found', data: deviceData, message: 'Device not found' });
            }
        } catch (err) {
            next(err);
        }
    }


    /**
     * @param {*} req
     * @param {*} res
     * @memberof DeviceController
     * @description operate a device (on or off)
     */
    async operateADevice(req, res, next) {
        try {
            const deviceId = req.params.deviceId;

            let deviceData = await deviceModel.getOnebyIdAndUpdate(deviceId);
            deviceData.isSwitchedOn = !deviceData.isSwitchedOn;
            let updatedDeviceData = await deviceData.save();

            if (updatedDeviceData) {
                res.status(200).json({ code: 200, error: null, data: updatedDeviceData._id, message: 'Devices status updated successfully' });
            } else {
                res.status(404).json({ code: 404, error: 'Not Found', data: null, message: 'Device status not updated' });
            }
        } catch (err) {
            next(err);
        }
    }

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DeviceController
     * @description add a device
     */
    async addDevice(req, res, next) {
        try {
            const { name, type } = req.body;
            let deviceData = {
                name,
                status: 'paired',
                type,
                isSwitchedOn: true
            };
            let createdDeviceData = await deviceModel.createDevice(deviceData);;

            if (createdDeviceData) {
                res.status(200).json({ code: 200, error: null, data: createdDeviceData._id, message: 'Devices added successfully' });
            } else {
                res.status(404).json({ code: 404, error: 'Not Found', data: null, message: 'Device status not updated' });
            }
        } catch (err) {
            next(err);
        }
    }

}

module.exports = new DeviceController;