const insertDislikeModel = require('../../models/tweets/insertDislikeModel');

const newDislikeController = async (req, res, next) => {
    try {
        const { tweetId } = req.params;

        await insertDislikeModel(tweetId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Dislike added',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newDislikeController;
