import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import TweetCreateForm from '../../froms/tweetCreateForm/tweetCreateForm';

const TweetCreatePage = () => {
  const { authUser } = useAuth();

  if (!authUser) return <Navigate to='/' />;
  return (
    <main>
      <TweetCreateForm />
    </main>
  );
};

export default TweetCreatePage;
