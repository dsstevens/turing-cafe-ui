import { useState } from 'react'
import './Form.css'

export default function Form({ addReservations }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: ''
  })

  const handleChange = event => {
    const { name, value, type } = event.target
    setFormData(existingData => {
      // console.log("this is existing data in the inputs", existingData)
      return {
        ...existingData,
        [name]: type === 'number' ? parseInt(value) : value
      }
    })
  }

  const submitForm = event => {
    event.preventDefault()
    addReservations(formData)
  }

  return (
    <form className='rez-form' onSubmit={submitForm}>
      <input type='text' name='name' id='name' placeholder ='Name' onChange={handleChange} value={formData.name}/>
      <input type='text' name='date' id='date' placeholder ='Date (mm/dd)' onChange={handleChange} value={formData.date} />
      <input type='text' name='time' id='time' placeholder ='Time' onChange={handleChange} value={formData.time}/>
      <input type='number' name='number' id='number' placeholder ='Number of Guests' onChange={handleChange} value={formData.number}/>
      <button type='submit' className='submit-btn'>Make Reservation</button>
    </form>
  )
}