'use strict';

const router = require('express').Router();
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
        this.myRoutes.get('/', (req, res) => res.json({ msg: 'done' }));

        this.myRoutes.get('/device/all', deviceController.deviceList);
        this.myRoutes.get('/device/id/:deviceeId', (req, res) => res.json({ msg: 'done' }));
        this.myRoutes.post('/device/add', (req, res) => res.json({ msg: 'done' }));
        this.myRoutes.put('/device/operate/:deviceId', (req, res) => res.json({ msg: 'done' }));
        this.myRoutes.delete('/device/id/:deviceId', (req, res) => res.json({ msg: 'done' }));

        this.myRoutes.all('*', (req, res) => res.sendStatus(404));
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