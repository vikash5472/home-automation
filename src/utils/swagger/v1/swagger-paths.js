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
    },
    "/device/all": {
        get: {
            tags: ["Device"],
            description: "Get root request's response from the api - basically server status",
            responses: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    },
    "/device/add": {
        post: {
            tags: ["Device"],
            description: "Get root request's response from the api - basically server status",
            responses: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    },
    "/device/operate/{deviceId}": {
        put: {
            tags: ["Device"],
            description: "Get root request's response from the api - basically server status",
            responses: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    },
    "/device/id/{deviceId}": {
        delete: {
            tags: ["Device"],
            description: "Get root request's response from the api - basically server status",
            responses: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    },
    "/device/id/{deviceeId}": {
        get: {
            tags: ["Device"],
            description: "sadasda",
            response: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    }
};