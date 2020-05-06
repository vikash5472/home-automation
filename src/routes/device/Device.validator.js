'use strict';

const Joi = require('@hapi/joi')

class JoiValidateDevice {
    constructor() {
        this.deviceIdSchema = Joi.object({
            deviceId: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).required().messages({
                "string.base": `"deviceId" should be a 'alpha-numeric' string`,
                "string.pattern.base": `"deviceId" must be a valid mongo _id`,
                "string.empty": `"deviceId" cannot be an empty field`,
                "any.required": `"deviceId" is a required field`
            })
        });

        this.deviceDataSchema = Joi.object({
            name: Joi.string().required().min(4),
            type: Joi.string().required().min(4).valid('light', 'switch', 'bulb').allow(null)
        });
    }
}

module.exports = new JoiValidateDevice;