import React from 'react';
import HollowDotsSpinner from '@bit/bondz.react-epic-spinners.hollow-dots-spinner';

import './Loader.scss';

function Loader({ loading }) {
  return (
    // <div className={`loader ${!loading && 'hidden'}`}>
    <div className={`loader ${!loading && 'hidden'}`}>
      <HollowDotsSpinner
        color="#1E407C"
        className={`color ${!loading && 'hidden'}`}
        animationDuration={1000}
      />
    </div>
  ) 
}

export default Loader;
