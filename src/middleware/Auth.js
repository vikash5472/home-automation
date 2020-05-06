const JWTutils = require('../utils/jwt/JwtAuth');
const ErrorResponse = require('../utils/helpers/ErrorResponse');

class Auth {
    async authenticate(req, res, next) {
        const accessToken = req.headers['authorization'];
        console.log('asssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
        if (!accessToken) {
            return next(new ErrorResponse('Un-Authorized Access(accessToken)', 401));
        }
        try {
            let decodedData = await JWTutils.verify(accessToken);
            req.decoded = decodedData;
            console.log('sa=d=as=d=a=d=a=d=asd=a=d=a=sd=as=d=')
            next();
        } catch (err) {
            console.log('sadsadasdasdasdassssdddddddddddddddddddddddddddddddddddddddddddd')
            next(err);
        }
    }
}

module.exports = new Auth;