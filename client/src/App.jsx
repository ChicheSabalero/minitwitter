import { Route, Routes } from 'react-router-dom';
import TweetSearchPage from '../src/pages/TweetSearch/TweetSearchPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';
import Footer from './components/footer/Footer';
import Header from './components/headers/Header';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';
import TweetCreatePage from './pages/TweetCreatePage/TweetCreatePage';

const App = () => {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<TweetSearchPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/message' element={<TweetCreatePage />} />
        <Route path='/users' />
        <Route path='/tweets' />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
