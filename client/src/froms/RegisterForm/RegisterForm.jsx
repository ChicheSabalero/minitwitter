import PropTypes from 'prop-types';
import { useState } from 'react';

const RegisterForm = ({ authRegister, loading }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authRegister(username, email, password, confirmPassword);
        }}
      >
        <label htmlFor='Username'>Username</label>
        <input
          type='text'
          id='username'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <label htmlFor='Confirm Password'>Confirm Password</label>

        <input
          type='password'
          id='confirmPassword'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button disabled={loading}>Register</button>
      </form>
    </>
  );
};

RegisterForm.propTypes = {
  authRegister: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RegisterForm;
