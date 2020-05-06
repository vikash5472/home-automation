const swaggerHelpers = require('./swagger-helpers');

const securityObject = [{ authenticate: [] }];

module.exports = {
    "/": {
        get: {
            tags: ["Open"],
            summary: "Check - server status",
            description: "Get root request's response from the api - basically server status",
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
                200: { "description": "Healthy! server status and API status." },
                500: swaggerHelpers.responseObject['500']
            }
        }
    },
    "/device/id/{deviceeId}": {
        get: {
            tags: ["Device"],
            summary: "Fetch - Single device",
            description: "Fetch a single device dara based on its id (deviceId)",
            consumes: ["application/json"],
            produces: ["application/json"],
            parameters: [{
                in: "path", name: "deviceeId", description: "its device object id (_id)", required: true,
                schema: { type: "string", required: true }
            }],
            responses: {
                200: swaggerHelpers.responseObject['200'],
                404: swaggerHelpers.responseObject['404'],
                500: swaggerHelpers.responseObject['500']
            },
            // security: securityObject
        }
    },
    "/device/all": {
        get: {
            tags: ["Device"],
            summary: "Fetch - All devices",
            description: "It will get all devices data at once",
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
                200: swaggerHelpers.responseObject['200'],
                404: swaggerHelpers.responseObject['404'],
                500: swaggerHelpers.responseObject['500']
            },
            // security: securityObject
        }
    },
    "/device/add": {
        post: {
            tags: ["Device"],
            summary: "Add - single device",
            description: "Add a device to the database",
            consumes: ["application/json"],
            produces: ["application/json"],
            parameters: [
                {
                    in: "body", name: "data", description: "Deviec data", required: true,
                    schema: {
                        type: "object", required: ["name", "type"],
                        properties: {
                            name: { type: "string", example: 'Bedroom Light' },
                            type: { type: "string", example: 'light' }
                        }
                    }
                }],
            responses: {
                200: swaggerHelpers.responseObject['200'],
                404: swaggerHelpers.responseObject['404'],
                500: swaggerHelpers.responseObject['500']
            },
            // security: securityObject
        }
    },
    "/device/operate/{deviceId}": {
        put: {
            tags: ["Device"],
            summary: "On/Off - single device",
            description: "Turn a device on or off using deviceId",
            consumes: ["application/json"],
            produces: ["application/json"],
            parameters: [{
                in: "path", name: "deviceId", description: "its device object id (_id)", required: true,
                schema: { type: "string", required: true }
            }],
            responses: {
                200: swaggerHelpers.responseObject['200'],
                404: swaggerHelpers.responseObject['404'],
                500: swaggerHelpers.responseObject['500']
            },
            // security: securityObject
        }
    },
    "/device/id/{deviceId}": {
        delete: {
            tags: ["Device"],
            summary: "Delete - Single device",
            description: "It will delete a device based on its deviceId.",
            consumes: ["application/json"],
            produces: ["application/json"],
            parameters: [{
                in: "path", name: "deviceId", description: "its device object id (_id)", required: true,
                schema: { type: "string", required: true }
            }],
            responses: {
                200: swaggerHelpers.responseObject['200'],
                404: swaggerHelpers.responseObject['404'],
                500: swaggerHelpers.responseObject['500']
            },
            // security: securityObject
        }
    }
};