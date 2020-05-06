'use strict';
/**
 * initialising app
 * every varibale in .env will be available in process.env object
 */
const dotenv = require('dotenv');
dotenv.config();

/**
 * initialising app
 */
const App = require('./src/App');
new App().core();