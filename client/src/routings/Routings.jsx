import React, { createContext, lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import axios from 'axios';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));

const MyContext = createContext();

const Routings = () => {
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    getStates('https://sroy1999-dev.github.io/Indian-states/states.json')
  }, [])

  const getStates = async(url) => {
    await axios.get(url).then((res) => {
      console.log(res.data[0].name);
      setStateList(res.data)
    })
  }

  const values = {
    stateList,
    selectedState,
    setSelectedState
  }
  return (
    <Router>
      <MyContext.Provider value={values}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" exact={true} element={<Homepage />} />
            </Routes>
        </Suspense>
      </MyContext.Provider>
    </Router>
  )
}

export default Routings;

export { MyContext };