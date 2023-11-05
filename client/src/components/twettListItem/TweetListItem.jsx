// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { tweetPropTypes, userPropTypes } from '../../utils/customPropTypes';

import TweetHeader from './tweetHeader/TweetHeader';
import TweetBody from './tweetBody/TweetBody';
import TweetFooter from './tweetFooter/TweetFooter';

import './TweetListItem.css';

const TweetListItem = ({
  authUser,
  tweet,
  likeTweetById,
  dislikeTweetById,
  deleteTweetById,
}) => {
  return (
    <li>
      <TweetHeader username={tweet.username} createdAt={tweet.createdAt} />
      <TweetBody text={tweet.text} image={tweet.image} />
      <TweetFooter
        authUser={authUser}
        tweetId={tweet.id}
        owner={tweet.owner}
        likes={tweet.likes}
        likedByMe={tweet.likedByMe}
        likeTweetById={likeTweetById}
        dislikes={tweet.dislikes}
        dislikedByMe={tweet.dislikedByMe}
        dislikeTweetById={dislikeTweetById}
        deleteTweetById={deleteTweetById}
        createdAt={tweet.createdAt}
        username={tweet.username}
      />
    </li>
  );
};

TweetListItem.propTypes = {
  authUser: userPropTypes,
  tweet: tweetPropTypes,
  likeTweetById: PropTypes.func.isRequired,
  dislikeTweetById: PropTypes.func.isRequired,
  deleteTweetById: PropTypes.func.isRequired,
};

export default TweetListItem;
