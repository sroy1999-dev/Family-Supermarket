import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className='loader-container'>
        <div className="spinner">
            <CircularProgress className='color' />
            <p>Loading</p>
        </div>
    </div>
  )
}

export default Loader