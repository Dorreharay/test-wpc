import React from 'react';
import HollowDotsSpinner from '@bit/bondz.react-epic-spinners.hollow-dots-spinner';

import './Loader.scss';

function Loader() {
  return (
    <div className="loader">
      <HollowDotsSpinner
        color="#1E407C"
        animationDuration={1000}
      />
    </div>
  );
}

export default Loader;
