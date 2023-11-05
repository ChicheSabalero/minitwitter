const jwt = require('jsonwebtoken')
const { invalidTokenError } = require('../services/errorService')

const authUserOptionalController = async (req, res, next) => {
    try {

        const { authorization } = req.headers



        if (authorization) {
            let userInfo

            try {
                userInfo = jwt.verify(authorization, process.env.SECRET)
                req.user = userInfo
            } catch (error) {
                console.error(error);
                invalidTokenError
            }
        }
        next()


    } catch (error) {
        next(error)
    }
}

module.exports = authUserOptionalController