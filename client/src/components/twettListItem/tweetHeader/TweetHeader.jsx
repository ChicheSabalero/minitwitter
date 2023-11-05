import PropTypes from 'prop-types';

import './TweetHeader.css';

const TweetHeader = ({ username }) => {
  return (
    <header className='tweet-header'>
      <p>@ {username}</p>
    </header>
  );
};

TweetHeader.propTypes = {
  username: PropTypes.string.isRequired,
};

export default TweetHeader;

{
  /* <time>
{new Date(createdAt).toLocaleDateString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  day: '2-digit',
  month: '2-digit',
  year: '2-digit',
})}
</time>
  createdAt: PropTypes.string.isRequired, */
}
