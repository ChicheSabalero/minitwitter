const deleteLikeModel = require("../../models/tweets/deleteLikeModel");

const deleteLikeController = async (req, res, next) => {
    try {
        const { tweetId } = req.params;

        await deleteLikeModel(tweetId, req.user.id)
        res.send({
            status: "ok",
            message: "Like deleted",
        })
    } catch (error) {
        next(error);
    }

}

module.exports = deleteLikeController;