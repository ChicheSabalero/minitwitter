import PropTypes from 'prop-types';
import { useState } from 'react';

import './TweetSearchForm.css';

// eslint-disable-next-line react/prop-types
const TweetSearchForm = ({ setSearchParams, loading }) => {
  const [keyword, setKeyword] = useState('');
  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParams(new URLSearchParams({ keyword }));
      }}
    >
      <input
        type='search'
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button disabled={loading}> Search </button>
    </form>
  );
};

TweetSearchForm.prototypes = {
  setSearchParams: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TweetSearchForm;
