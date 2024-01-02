import Card from '../Card/Card'
import './Reservations.css'

export default function Reservations({ reservations }) {
  const cards = reservations.map(rez => {
    return <Card reservation={rez} key={rez.id} />
  })

  return <div className='resy-container'>{cards}</div>
}