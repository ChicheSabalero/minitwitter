import { useTweets } from '../../hooks/useTweets';
import { useAuth } from '../../hooks/useAuth';
import TweetListItem from '../../components/twettListItem/TweetListItem';
import TweetCreatePage from '../TweetCreatePage/TweetCreatePage';
import './TweetSearchPage.css';

const TweetSearchPage = () => {
  const { authUser } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const { tweets, loading, likeTweetById, dislikeTweetById, deleteTweetById } =
    useTweets();
  return (
    <main>
      {<h1>New Tweet</h1>}
      <TweetCreatePage />
      {loading && <p>Loading...</p>}
      {tweets && (
        <>
          <h2>Tweets List</h2>
          <ul className='tweets-list'>
            {tweets?.length > 0 ? (
              tweets.map((tweet) => {
                return (
                  <TweetListItem
                    key={tweet.id}
                    authUser={authUser}
                    tweet={tweet}
                    likeTweetById={likeTweetById}
                    dislikeTweetById={dislikeTweetById}
                    deleteTweetById={deleteTweetById}
                  />
                );
              })
            ) : (
              <li className='no-tweets'>
                <p>Tweets not found</p>
              </li>
            )}
          </ul>
        </>
      )}
    </main>
  );
};

export default TweetSearchPage;
