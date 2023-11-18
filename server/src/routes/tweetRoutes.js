const express = require('express');
const router = express.Router()
const { authUserController, authUserOptionalController, tweetExistsController } = require('../middlewares')
const { newTweetController, newLikeController, deleteLikeController, deleteTweetController, newDislikeController, deleteDislikeController, listTweetsController } = require('../controllers/tweets');

router.post('/tweets', authUserController, newTweetController)

router.post('/tweets/:tweetId/likes', authUserController, tweetExistsController, newLikeController)

router.delete('/tweets/:tweetId/likes', authUserController, tweetExistsController, deleteLikeController);

router.post('/tweets/:tweetId/dislikes', authUserController, tweetExistsController, newDislikeController);

router.delete('/tweets/:tweetId/dislikes', authUserController, tweetExistsController, deleteDislikeController);

router.get('/tweets', authUserOptionalController, listTweetsController)

router.delete('/tweets/:tweetId', authUserController, tweetExistsController, deleteTweetController)

module.exports = router