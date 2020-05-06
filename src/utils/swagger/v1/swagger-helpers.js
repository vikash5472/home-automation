const info = {
    "version": "1.0.0",
    "title": "Signzy Home Automation - Api Documentation",
    "description": "Detailed Api documentaion for the `Home Automation App`",
    "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
    },
    "contact": {
        "email": "vikashv.2011@gmail.com"
    }
}

'use strict';
const tags = [
    { name: "Open", description: "OpenAPI - these does not require any authetication" },
    { name: "Device", description: "API Device manipulation , authenticated" },
];

/**
 * 1xx: Informational (request has been received and the process is continuing).
 * 2xx: Success (action was successfully received, understood, and accepted).
 * 3xx: Redirection (further action must be taken in order to complete the request).
 * 4xx: Client Error (request contains incorrect syntax or cannot be fulfilled).
 * 5xx: Server Error (server failed to fulfill an apparently valid request).
 */
const responseObject = {
    200: { description: "Success response with data" },
    202: { description: "Accepted" },
    400: { description: "Bad Request with error data" },
    401: { description: "Unauthorized" },
    404: { description: "Not found with error data" },
    500: { description: "Server is down" }
};
module.exports = { info, tags, responseObject }