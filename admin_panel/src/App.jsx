import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Routings from './Routes/Routings';
import Loader from './components/loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(false);

  useCallback(
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000)
    }, [])
  )

  return (
    <>
      {
        loading ? (<Loader />) : (<Routings />)
      }
    </>
  )
}

export default App
