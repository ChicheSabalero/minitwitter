const newTweetController = require('./newTweetController')
const deleteLikeController = require('./deleteLikeController')
const newLikeController = require('./newLikeController')
const deleteDislikeController = require('./deleteDislikeController');
const newDislikeController = require('./newDislikeController');
const listTweetsController = require('./listTweetsController')
const deleteTweetController = require('./deleteTweetController')

module.exports = {
    newTweetController,
    newLikeController,
    deleteLikeController,
    newDislikeController,
    deleteDislikeController,
    listTweetsController,
    deleteTweetController
}