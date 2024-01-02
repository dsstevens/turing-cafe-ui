import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
import { getReservations } from '../apiCalls'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form';

function App() {
  const [existingReservations, setExistingReservations] = useState([])
  const [newReservations, setNewReservations] = useState([])
// two state work around without POST to manually render new rez
  useEffect(() => {
    try {
    getReservations()
    .then(data => setExistingReservations(data))
    } catch (error) {
      console.error('Error getting reservations', error)
    }
  }, [])

  const addReservations = newRez => {
    setNewReservations(existingReservations => {
      return [...existingReservations, newRez]
    })
  }

  const totalReservations = [...existingReservations, ...newReservations]

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form  addReservations={addReservations}/>
      </div>
        <Reservations reservations={totalReservations} />
    </div>
  );
}

export default App; 