const joi = require('joi')

const joiErrorMessages = require('../joiErrorMessages')

const imgSchema = require('../imgSchema')

const newTweetSchema = joi.object({
    text: joi.string().required().messages(joiErrorMessages),
    image: imgSchema.optional().messages(joiErrorMessages),



})

module.exports = newTweetSchema