const deleteDislikeModel = require('../../models/tweets/deleteDislikeModel');

const deleteDislikeController = async (req, res, next) => {
    try {
        const { tweetId } = req.params;

        await deleteDislikeModel(tweetId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Dislike Deleted',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteDislikeController;
