import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoadingSpinner;
