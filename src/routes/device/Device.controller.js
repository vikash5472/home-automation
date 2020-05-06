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

}

module.exports = new DeviceController;