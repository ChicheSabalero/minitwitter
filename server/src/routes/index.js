const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const tweetRoutes = require('./tweetRoutes');

router.use(userRoutes);
router.use(tweetRoutes);

module.exports = router;