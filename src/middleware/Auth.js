const JWTutils = require('../utils/jwt/JwtAuth');
const ErrorResponse = require('../utils/helpers/ErrorResponse');

class Auth {
    async authenticate(req, res, next) {
        const accessToken = req.headers['authorization'];
        if (!accessToken) {
            return next(new ErrorResponse('Un-Authorized Access(accessToken)', 401));
        }
        try {
            // verified token and assigned to req object
            let decodedData = await JWTutils.verify(accessToken);
            req.decoded = decodedData;
            next();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new Auth;