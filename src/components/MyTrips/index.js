import {Link} from 'react-router-dom'

import MyTripContext from '../../Context/MyTripContext'

import MyTripList from '../MyTripList'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
const MyTrips = () => {
  return (
    <MyTripContext.Consumer>
      {value => {
        const {myTripList} = value
        const noTrips = () => {
          return (
            <div className="no-container">
              <div className="no-trips-container">
                <img
                  src="https://res-console.cloudinary.com/dkjkncj4l/thumbnails/v1/image/upload/v1713696928/VmVjdG9yX2R3aTZ2Yg==/drilldown"
                  className="no-image"
                  alt="no trips"
                />
                <h1 className="no-heading">No upcoming trips</h1>
                <p className="no-paragraph">
                  When you book a trip, you will see your trip details here
                </p>
                <Link to="/book-a-new-trip" className="link">
                  <button className="no-button" type="button">
                    Book a new trip
                  </button>
                </Link>
              </div>
            </div>
          )
        }
        const tripsList = () => {
          return (
            <div className="trip-list-container">
              <h1 className="heading">My Trips</h1>
              <ol>
                {myTripList.map(eachTrip => (
                  <MyTripList key={eachTrip.id} tripDetails={eachTrip} />
                ))}
              </ol>
            </div>
          )
        }
        return (
          <div className="my-trip-container">
            <Header />
            {myTripList.length === 0 ? noTrips() : tripsList()}
            <Footer />
          </div>
        )
      }}
    </MyTripContext.Consumer>
  )
}

export default MyTrips
