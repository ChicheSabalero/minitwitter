import PropTypes from 'prop-types';

import './TweetBody.css';

const baseURL = import.meta.env.VITE_API_URL;

const TweetBody = ({ text, image }) => {
  return (
    <div className='tweet-body'>
      <p>° {text}</p>
      {image && <img src={`${baseURL}/${image}`} alt='tweet image' />}
    </div>
  );
};

TweetBody.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default TweetBody;
