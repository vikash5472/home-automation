'use strict';

const router = require('express').Router();
const defaultController = require('./default/Default.controller');
const deviceController = require('./device/Device.controller');
const authController = require('./auth/auth.controller');
const authMiddleware = require('./../middleware/Auth');

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
        // Default route
        this.myRoutes.get('/', defaultController.root);

        // Auth route for generating access token, which is required to access APIs
        this.myRoutes.get('/generate-token', authController.generateToken);

        // Checking every request fro token via AUTH middleware
        this.myRoutes.use(authMiddleware.authenticate);

        // device routes for basic functionality for the device
        this.myRoutes.get('/device/all', deviceController.deviceList);
        this.myRoutes.get('/device/id/:deviceId', deviceController.deviceSingleDevice);
        this.myRoutes.post('/device/add', deviceController.addDevice);
        this.myRoutes.put('/device/operate/:deviceId', deviceController.operateADevice);
        this.myRoutes.delete('/device/id/:deviceId', deviceController.deleteOneDevice);

        // unwanted route handler
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