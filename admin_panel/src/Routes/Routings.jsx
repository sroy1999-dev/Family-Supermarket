import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import CircularProgress from '@mui/material/CircularProgress';
import Sidebar from '../components/sidebar/Sidebar';

const Homepage = lazy(() => import('../pages/Homepage'));

const Routings = () => {
  return (
    <Router>
      <Header />
      <div className="main d-flex">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path={'/'} exact={true} element={
              <Suspense fallback={<>
                <CircularProgress />
              </>}>
                <Homepage />
              </Suspense>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Routings;