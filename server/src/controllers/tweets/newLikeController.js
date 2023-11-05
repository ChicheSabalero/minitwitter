const insertLikeModel = require("../../models/tweets/insertLikeModel");

const newLikeController = async (req, res, next) => {
    try {
        const { tweetId } = req.params;

        await insertLikeModel(tweetId, req.user.id)
        res.send({
            status: "ok",
            message: "Like added",
        })
    } catch (error) {
        next(error);
    }

}

module.exports = newLikeController;