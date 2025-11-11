import { useEffect, useState } from 'react'
import { Apartment } from './components/Apartment';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import SinglePage from './pages/SinglePage';

// https://apartments-api.edu.ironhack.com/apartments

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/apartment/:apartmentId" element={ <SinglePage /> } />
      </Routes>
    </>
  );
}

export default App
