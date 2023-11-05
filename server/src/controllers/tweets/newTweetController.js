const insertTweetModel = require("../../models/tweets/insertTweetModel")
const newTweetSchema = require("../../schemas/tweets/newTweetSchema")
const savePhoto = require("../../utils/savePhoto")
const validateSchema = require("../../utils/validateSchema")
validateSchema
newTweetSchema

const newTweetController = async (req, res, next) => {
    try {

        const { text } = req.body

        await validateSchema(newTweetSchema, {
            ...req.body,
            ...req.files,
        })

        let imgName

        if (req.files?.image) {
            imgName = await savePhoto(req.files.image, 500)

        }

        const tweetId = await insertTweetModel(text, imgName, req.user.id)

        res.send({
            status: "ok",
            data: {
                tweet: {
                    id: tweetId,
                    userId: req.user.id,
                    text,
                    image: imgName || null,
                    createdAt: new Date()
                }
            }
        })

    } catch (err) {
        next(err)
    }
}

module.exports = newTweetController