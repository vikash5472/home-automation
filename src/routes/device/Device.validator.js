'use strict';

const Joi = require('@hapi/joi')
// .extend(require('@hapi/joi-date'));

/**
 * @class JoiValidateDevice
 */
class JoiValidateDevice {
    constructor() {
        // this.objectSchema = Joi.object({
        //     name: Joi.string().min(1).required(),
        //     time: Joi.string().regex(/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/).required().messages({
        //         "string.base": `"time" should be a type of 'text'`,
        //         "string.pattern.base": `"time" must be in HH:MM:SS format`,
        //         "string.empty": `"time" cannot be an empty field`,
        //         "any.required": `"time" is a required field`
        //     })
        // });

        // this.arraySchema = Joi.array().items(this.objectSchema).unique().required();

        // this.activitySchema = Joi.object(
        //     {
        //         id: Joi.number(),
        //         admin_id: Joi.number(),
        //         app_data: Joi.alternatives().try(this.objectSchema, this.arraySchema).required(),
        //         website_data: Joi.alternatives().try(this.objectSchema, this.arraySchema).required(),
        //         // day: Joi.date().format('YYYY-MM-DD').required()
        //         day: Joi.string().regex(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/).required().messages({
        //             "string.base": `"day" should be a type of 'text'`,
        //             "string.pattern.base": `"day" must be in YYYY-MM-DD format`,
        //             "string.empty": `"day" cannot be an empty field`,
        //             "any.required": `"day" is a required field`
        //         })
        //     }
        // ).required();
    }
}

module.exports = new JoiValidateDevice().activitySchema;