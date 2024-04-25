import Cookies from 'js-cookie'
import {Redirect, Link, withRouter} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-container">
      <Header />

      <div className="trvael-container">
        <div className="new-trip-container">
          <div className="image-container">
            <img
              src="https://res-console.cloudinary.com/dkjkncj4l/thumbnails/v1/image/upload/v1713522018/aW1hZ2VfNV9oc2xpaWw=/drilldown"
              alt="image"
              className="image"
            />
          </div>
          <div className="trip-container">
            <h1 className="trvael-heading">Travel. Relax. Memories.</h1>
            <p className="paragraph">
              With travel trip you can experience new travel and the best
              tourist destinations
            </p>
            <Link to="/book-a-new-trip">
              <button className="trip-button">Book a new trip</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <hr className="horizontal-line" />
        <Footer />
      </div>
    </div>
  )
}

export default withRouter(Home)
