const insertUserModel = require("../../models/users/insertUserModel")
const newUserSchema = require("../../schemas/users/newUserSchema")
const validateSchema = require("../../utils/validateSchema")



const newUserController = async (req, res, next) => {
    try {

        const { username, email, password } = req.body

        await validateSchema(newUserSchema, req.body)

        await insertUserModel(username, email, password)

        res.send({
            status: "Ok",
            message: `New user created`,
        })
    } catch (err) {
        next(err)
    }
}

module.exports = newUserController