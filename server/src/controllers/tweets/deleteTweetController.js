const deleteTweetModel = require('../../models/tweets/deleteTweetModel')

const deleteTweetController = async (req, res, next) => {

    try {

        console.log(req.params)

        await deleteTweetModel(req.params.tweetId, req.user.id)

        res.send({
            status: 'ok',
            message: 'Tweet deleted',
        })

    } catch (error) {
        next(error)
    }
}

module.exports = deleteTweetController