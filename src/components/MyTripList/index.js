import './index.css'

const MyTripList = props => {
  const {tripDetails} = props
  const {id, location, startDate, endDate} = props
  return (
    <li>
      <h1>{location}</h1>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </li>
  )
}

export default MyTripList
