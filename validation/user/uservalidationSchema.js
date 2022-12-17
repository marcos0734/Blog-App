const joi = require('joi')
// joi.objectId= require ('joi-objectid')(joi);

const validationSchema = {
    userSignup : joi.object({
        name:joi.string().max(20).required(),
        email:joi.string().email().required(),
        password:joi.string().min(8).required(),
        city:joi.string(),
        state:joi.string(),
    }).unknown(true),
    loginUser : joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required()
    }).unknown(true),
}


module.exports = {
    validationSchema
}