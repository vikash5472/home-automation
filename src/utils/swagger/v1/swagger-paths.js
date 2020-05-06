const swaggerHelpers = require('./swagger-helpers');

const securityObject = [{ authenticate: [] }];

module.exports = {
    "/": {
        get: {
            tags: ["Open"],
            description: "Get root request's response from the api - basically server status",
            responses: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    }
};