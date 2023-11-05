import PropTypes from 'prop-types';
import { useState } from 'react';

const LoginForm = ({ authLogin, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authLogin(email, password);
        }}
      >
        <label htmlFor='Email'>Email</label>

        <input
          type='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor='Password'>Password</label>

        <input
          type='password'
          id='pass'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button disabled={loading}>Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  authLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
