const jwt = require('jsonwebtoken');

class JwtAuth {
    constructor() {
        this.accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
        this.tokenLife = process.env.JWT_TOKEN_LIFE;
    }

    generateAccessToken(user) {
        return new Promise((resolve, reject) => {
            jwt.sign(
                user,
                this.accessTokenSecret,
                { algorithm: 'HS256', expiresIn: this.tokenLife },
                (err, token) => {
                    if (err) reject(err);
                    else resolve(token);
                }
            );
        });
    }

    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.accessTokenSecret, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            });
        })
    }

}

module.exports = new JwtAuth;