const selectUserByIdModel = require('../../models/users/selectUserByIdModel')
const updateAvatarModel = require("../../models/users/updateAvatarModel")
const deletePhoto = require("../../utils/deletePhoto")
const savePhoto = require("../../utils/savePhoto")
const validateSchema = require("../../utils/validateSchema")
const editAvatarSchema = require("../../schemas/users/editAvatarSchema")

const editAvatarController = async (req, res, next) => {
    try {

        await validateSchema(editAvatarSchema, req.files || {})

        const user = await selectUserByIdModel(req.user.id)

        if (user.avatar) {
            await deletePhoto(user.avatar)

        }

        const avatarName = await savePhoto(req.files.avatar, 250)

        await updateAvatarModel(avatarName, req.user.id)

        res.send({
            status: 'ok',
            message: `Photo updated successfully`,
        })

    } catch (error) {
        next(error)
    }
}

module.exports = editAvatarController