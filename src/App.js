'use strict';
const express = require('express');
const open = require('open');
const morgan = require('morgan');
const compression = require('compression');
const timeout = require('express-timeout-handler');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const swaggerUi = require('swagger-ui-express');
const Routes = require('./routes/Routes');
const swaggerSpec = require('./utils/swagger/v1/swagger-json');


/**
 *
 * @class App
 */
class App {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
    }

    /**
     * @function core - contains the basic logic of the perticular class
     * As per SOLID principle
     */
    core() {
        this.addRoutesAndMiddleWares(this.app);
        this.listenToPort(this.app, this.port);
    }

    /**
     * Applies Middleware to express-app
     * @function addRoutesAndMiddleWares
     * @param {Express} app
     * @memberof App
     */
    addRoutesAndMiddleWares(app) {

        // express body parser
        app.use(express.json({ limit: '50mb' }), express.urlencoded({ urlencoded: false, limit: '50mb', extended: true }));
        // Logging
        app.use(morgan('dev'));
        // security headers
        app.use(helmet());
        // handling DDOS attacks by stopping req after specified time with specific req calls
        app.use(new rateLimit({
            windowMs: parseInt(process.env.RATE_LIMIT_DURATION) * 60 * 1000,
            max: parseInt(process.env.RATE_LIMIT_REQUEST_ALLOWED)
        }));
        // compressing req
        app.use(compression());
        // keeping the req/res alive for certain time
        app.use((req, res, next) => {
            res.set({
                'compress': true, 'Connection': 'keep-alive', 'Keep-Alive': 'timeout=200'
            });
            next();
        });
        // handling req time out
        const options = {
            timeout: 60000,
            onTimeout: function (req, res) {
                res.json({ code: 503, message: `This request is timed out - ${req.originalUrl}`, error: 'Server Timeout', data: null });
            },
            onDelayedResponse: function (req, method, args, requestTime) {
                console.log(`"${req.originalUrl}" is timedout and Attempted to call "${method}" after timeout "${requestTime}" ms`);
            },
            disable: ['write', 'setHeaders', 'send', 'json', 'end']
        };
        app.use(timeout.handler(options));

        // mongo connection
        require('./config/mongoose.db');

        // Adding swagger for the routes
        app.use('/api/v1/explorer', swaggerUi.serve, (...args) => swaggerUi.setup(swaggerSpec)(...args));

        // Registering routes
        app.use('/api/v1', new Routes().getRouters());
        app.use(require('./middleware/error'));

        // default route handler
        app.get('/', (req, res) => { res.redirect('/api/v1/explorer'); });
    }

    /**
     * @function listenToPort
     * @param {Express} app - (Express App)
     * @param {Number} port
     * @memberof App
     */
    listenToPort(app, port) {
        this.server = app.listen(port, () => console.log(`== Application started at ${port} == in ${process.env.NODE_ENV} environment ==`));
        // open(`http://localhost:${port}/api/v1/explorer`);

        // Handle unhandled promise rejections
        process.on('unhandledRejection', (err, promise) => {
            console.error(`Error: ${err.message}`);
            // Close server & exit process
            this.server.close(() => process.exit(1));
        });
    }
}

module.exports = App;