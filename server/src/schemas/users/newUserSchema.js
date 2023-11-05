const joi = require('joi');

const joiErrorMessages = require('../joiErrorMessages');

const newUserSchema = joi.object({
    username: joi.string().required().messages(joiErrorMessages),
    email: joi.string().email().required().messages(joiErrorMessages),
    password: joi.string().min(6).required().messages(joiErrorMessages),
});

module.exports = newUserSchema;


// password: joi.string().min(8).max(100).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/).required().messages(joiErrorMessages),