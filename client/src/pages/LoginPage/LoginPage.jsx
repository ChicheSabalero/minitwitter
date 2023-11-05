import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../froms/LoginForm/LoginForm';

const LoginPage = () => {
  const { authUser, authLogin, loading } = useAuth();

  if (authUser) return <Navigate to='/' />;

  return (
    <main>
      <h2>Login</h2>
      <LoginForm authLogin={authLogin} loading={loading} />
    </main>
  );
};

export default LoginPage;
