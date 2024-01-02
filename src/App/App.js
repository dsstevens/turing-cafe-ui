import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
import { getReservations } from '../apiCalls';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    //invoke fetch on mounting
    getReservations()
    .then(data => setReservations(data))
  }, [])
  
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 