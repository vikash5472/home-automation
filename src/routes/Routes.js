'use strict';

const router = require('express').Router();
const defaultController = require('./default/Default.controller');
const deviceController = require('./device/Device.controller');

class Routes {
    constructor() {
        this.myRoutes = router;
        this.core();
    }

    /**
     * @function core - contains all the routes
     * @memberof Routes
     */
    core() {
        this.myRoutes.get('/', defaultController.root);

        this.myRoutes.get('/device/all', deviceController.deviceList);
        this.myRoutes.get('/device/id/:deviceId', deviceController.deviceSingleDevice);
        this.myRoutes.post('/device/add', deviceController.addDevice);
        this.myRoutes.put('/device/operate/:deviceId', deviceController.operateADevice);
        this.myRoutes.delete('/device/id/:deviceId', deviceController.deleteOneDevice);

        this.myRoutes.all('*', defaultController.notDefinedRoutes);
    }

    /**
     * Getter Function.
     *
     * @returns {Router}
     * @memberof Routes
     */
    getRouters() {
        return this.myRoutes;
    }
}

module.exports = Routes;