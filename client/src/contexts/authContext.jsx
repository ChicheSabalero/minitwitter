import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TOKEN_LOCAL_STORAGE_KEY } from '../utils/constants';

import { getToken } from '../utils/getToken';

import {
  getPrivateProfileService,
  signInService,
  signUpService,
} from '../services/userService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const body = await getPrivateProfileService();

        if (body.status === 'error') {
          throw new Error(body.message);
        }

        setAuthUser(body.data.user);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    const token = getToken();

    if (token) fetchUser();
  }, [isAuthenticated]);

  const authRegister = async (username, email, password, confirmPassword) => {
    try {
      setLoading(true);

      if (password !== confirmPassword) {
        throw new Error(`Password don't Match`);
      }

      const body = await signUpService(username, email, password);

      if (body.status === 'error') {
        throw new Error(body.message);
      }

      navigate('/login');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const authLogin = async (email, password) => {
    try {
      setLoading(true);

      const body = await signInService(email, password);

      if (body.status === 'error') {
        throw new Error(body.message);
      }

      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, body.data.token);

      setIsAuthenticated(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const authLogout = () => {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);

    setAuthUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        authRegister,
        authLogin,
        authLogout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
