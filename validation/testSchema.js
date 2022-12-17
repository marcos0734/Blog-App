const Joi = require('joi')

const taskSchema = joi.object({
    name:Joi.string().min(3).required(),
    completed:Joi.boolean()
});

exports.validateTask=(task)=> taskSchema.validate(task)