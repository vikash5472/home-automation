'use strict';

const router = require('express').Router();
// const RootRoute = require('./root/Root.controller');

/**
 * ROUTES
 * @class
 */
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
        this.myRoutes.get('*', (req, res) => res.sendStatus(404));
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