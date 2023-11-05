const selectUserByIdModel = require('../../models/users/selectUserByIdModel')

const getUserController = async (req, res, next) => {
    try {
        const user = await selectUserByIdModel(req.user.id)

        res.send({
            status: 'OK',
            data: {
                user
            }
        })


    } catch (error) {
        next(error)

    }
}

module.exports = getUserController