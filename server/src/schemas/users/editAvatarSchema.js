const joi = require('joi')

const joiErrorMessages = require('../joiErrorMessages')

const imgSchema = require('../imgSchema')

const editAvatarSchema = joi.object({
    avatar: imgSchema.required().messages(joiErrorMessages)
})

module.exports = editAvatarSchema