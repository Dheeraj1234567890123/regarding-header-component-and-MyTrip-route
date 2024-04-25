import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {BiHome, BiLogOut} from 'react-icons/bi'

import './index.css'
const Footer = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="footer">
      <footer>
        <ol className="ordered-list">
          <li className="list">
            <Link className="link1" to="/">
              <BiHome className="home-image" />
              <h1 className="list-heading">Home</h1>
            </Link>
          </li>
          <li className="list">
            <Link className="link1" to="/my-trips">
              <img src="https://res-console.cloudinary.com/dkjkncj4l/thumbnails/v1/image/upload/v1713698028/c3VpdGNhc2UtMi1saW5lXzFfanl6eWlm/drilldown" />
              <h1 className="list-heading">My Trips</h1>
            </Link>
          </li>
          <li className="list">
            <BiLogOut className="home-image" />
            <button className="logout-button" onClick={onClickLogout}>
              Logout
            </button>
          </li>
        </ol>
      </footer>
    </nav>
  )
}

export default withRouter(Footer)
