const jwt = require('jsonwebtoken')
const { notAuthenticatedError, invalidTokenError } = require('../services/errorService')

const authUserController = async (req, res, next) => {
    try {

        const { authorization } = req.headers

        if (!authorization) {
            notAuthenticatedError()
        }

        try {
            const userInfo = jwt.verify(authorization, process.env.SECRET)
            req.user = userInfo
            next()
        } catch (error) {
            console.error(error);
            invalidTokenError
        }

    } catch (error) {
        next(error)
    }
}

module.exports = authUserController