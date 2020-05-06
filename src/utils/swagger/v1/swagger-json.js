'use strict';
const swaggerHelpers = require('./swagger-helpers');
const swaggerPaths = require('./swagger-paths');
/**
 * Swagger Api Docs
 * 
 * This is the main JSON (from module exports) where all the config and paths are defined
 * 
 * But to make it modular, few things are present is different files
 * Swagger-path -  contains all the path/routes of the project
 * Swagger-helpers 
 *      - infos object
 *      - tags object
 *      - definitions for paths
 *      - response object
 */
module.exports = {
    "swagger": "2.0",
    "info": swaggerHelpers.info,
    "host": process.env.API_URL,
    "basePath": "/api/v1",
    "tags": swaggerHelpers.tags,
    "schemes": ["http", "https"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": swaggerPaths,
    "securityDefinitions": {
        authenticate: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: "Please provide the valid access token, if you dont have please login and get the token as response!"
        }
    },
}