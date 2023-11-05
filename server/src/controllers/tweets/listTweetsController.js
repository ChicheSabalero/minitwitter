const selectAllTweettsModel = require('../../models/tweets/selectAllTweettsModel')

const listTweetsController = async (req, res, next) => {
    try {

        const { keyword } = req.query

        const tweets = await selectAllTweettsModel(keyword, req.user?.id)
        res.send({
            status: 'ok',
            data: {
                tweets,
            }
        })
    } catch (error) {
        next(error)
    }

}

module.exports = listTweetsController