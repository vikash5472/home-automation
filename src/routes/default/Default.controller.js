'use strict';
class DefaultController {

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DefaultController
     * @description index route
     */
    async root(req, res, next) {
        res.status(200).json({ code: 200, message: 'Evrthing is okay !!!' })
    }

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DefaultController
     * @description routes which are not specified
     */
    async notDefinedRoutes(req, res, next) {
        res.status(404).json({ code: 404, message: 'Not specified path' });
    }
}

module.exports = new DefaultController;