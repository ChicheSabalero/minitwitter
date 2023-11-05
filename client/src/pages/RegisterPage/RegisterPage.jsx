import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import RegisterForm from '../../froms/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const { authUser, authRegister, loading } = useAuth();

  if (authUser) return <Navigate to='/' />;

  return (
    <main>
      <h2>Registro</h2>
      <RegisterForm authRegister={authRegister} loading={loading} />
    </main>
  );
};

export default RegisterPage;
