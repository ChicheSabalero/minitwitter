import PropTypes from 'prop-types';
import { userPropTypes } from '../../../utils/customPropTypes';
import { useState } from 'react';
import heartAnimation from '../../../../public/vite.svg';
import './TweetFooter.css';
import {
  likeTweetService,
  deleteTweetService,
} from '../../../services/tweetService';

const TweetFooter = ({
  authUser,
  tweetId,
  owner,
  likes,
  likedByMe,
  likeTweetById,
  dislikes,
  dislikedByMe,
  dislikeTweetById,
  deleteTweetById,
  createdAt,
}) => {
  const [loading, setLoading] = useState(false);

  const handleLikeTweet = async () => {
    try {
      setLoading(true);

      const method = likedByMe ? 'delete' : 'tweet';

      const body = await likeTweetService(tweetId, method);

      if (body.status === 'error') {
        throw new Error(body.message);
      }

      likeTweetById(tweetId);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDisLikeTweet = async () => {
    try {
      setLoading(true);

      const method = dislikedByMe ? 'delete' : 'tweet';

      dislikeTweetById(tweetId, method);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTweet = async () => {
    if (confirm('¿Deseas eliminar el tweet?')) {
      try {
        setLoading(true);

        const body = await deleteTweetService(tweetId);

        if (body.status === 'error') {
          throw new Error(body.message);
        }

        deleteTweetById(tweetId);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <footer className='Tweet-Footer'>
      <div>
        <div
          className={`like ${likedByMe && 'like'}`}
          onClick={() => {
            if (authUser && !loading) {
              handleLikeTweet();
            }
          }}
        >
          <img className='heart' src={heartAnimation} alt='Heart Animation' />
        </div>
        <p> {likes} Likes</p>

        <div
          className={`dislike ${dislikedByMe && 'dislike'}`}
          onClick={() => {
            authUser && !loading && handleDisLikeTweet();
          }}
        >
          <img className='heart' src={heartAnimation} alt='Heart Animation' />

          <p>{dislikes} Dislikes</p>
        </div>

        <time>
          {new Date(createdAt)
            .toLocaleDateString('es-ES', {
              hour: '2-digit',
              minute: '2-digit',
              day: '2-digit',
              month: '2-digit',
              year: '2-digit',
            })
            .replace(/,/, '')
            .replace(/\//g, '-')}
        </time>
      </div>
      {owner && <button onClick={() => handleDeleteTweet()}>Delete</button>}
    </footer>
  );
};

TweetFooter.propTypes = {
  authUser: userPropTypes,
  username: PropTypes.string.isRequired,
  tweetId: PropTypes.number.isRequired,
  owner: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  likedByMe: PropTypes.bool.isRequired,
  dislikes: PropTypes.number.isRequired,
  dislikedByMe: PropTypes.bool.isRequired,
  dislikeTweetById: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
  likeTweetById: PropTypes.func.isRequired,
  deleteTweetById: PropTypes.func.isRequired,
};

export default TweetFooter;
