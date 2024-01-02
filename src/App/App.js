import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
import { getReservations } from '../apiCalls'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form';

function App() {
  const [reservations, setReservations] = useState([])
  useEffect(() => {
    getReservations()
    .then(data => setReservations(data))
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations} />
      </div>
    </div>
  );
}

export default App; 