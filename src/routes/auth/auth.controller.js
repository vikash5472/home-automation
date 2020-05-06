'use strict';

const JWTutils = require('./../../utils/jwt/JwtAuth');

class AuthController {

    /**
     * @param {*} req
     * @param {*} res
     * @memberof DefaultController
     * @description index route
     */
    async generateToken(req, res, next) {
        res.status(200).json({
            code: 200, date: {
                token: await JWTutils.generateAccessToken({ now: Date.now() })
            }
        });
    }
}

module.exports = new AuthController;