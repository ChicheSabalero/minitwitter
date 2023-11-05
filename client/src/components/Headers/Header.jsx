// Importamos los hooks.
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import TweetSearchForm from '../../froms/TweetSearchForm/TweetSearchForm';

// Importamos los iconos.
import RegisterIcon from '../../assets/register-icon.png';
import LoginIcon from '../../assets/login-icon.png';
import LogoutIcon from '../../assets/logout-icon.png';
import MessageIcon from '../../assets/message-icon.png';

// Importamos los estilos.
import './Header.css';

const Header = () => {
  const { authUser, authLogout, loading, setSearchParams } = useAuth();

  return (
    <header>
      <h1>
        <NavLink to='/'>MiniTwitter</NavLink>
      </h1>
      <section>
        <TweetSearchForm setSearchParams={setSearchParams} loading={loading} />
      </section>
      <nav>
        {authUser && <span>@ {authUser.username}</span>}

        {!authUser && (
          <>
            <div>
              <NavLink to='/login'>
                <img src={LoginIcon} alt='Login icon' />
              </NavLink>
            </div>
            <div>
              <NavLink to='/register'>
                <img src={RegisterIcon} alt='Register icon' />
              </NavLink>
            </div>
          </>
        )}

        {authUser && (
          <>
            <div>
              <NavLink to='/message'>
                <img src={MessageIcon} alt='Message icon' />
              </NavLink>
            </div>
            <button onClick={() => authLogout()}>
              <img src={LogoutIcon} alt='Logout Icon' />
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
