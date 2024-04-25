import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {BiShow, BiHide} from 'react-icons/bi'

import './index.css'
class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onClickPassword = () => {
    this.setState({showPassword: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg, showPassword} =
      this.state
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="app-container">
        <div className="login-container">
          <h1 className="heading">Travel Trip</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="input"
              value={username}
              onChange={this.onChangeUserName}
            />
            <label className="label" htmlFor="password">
              {showPassword ? 'password' : 'PASSWORD'}
            </label>
            <div className="password-container">
              <div className="show-password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  className="password-input"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="button-container">
                <button
                  className="show-password-button"
                  data-testid="show-password"
                  onClick={this.onClickPassword}
                  data-testid="show-password"
                >
                  {showPassword ? (
                    <BiHide />
                  ) : (
                    <BiShow  />
                  )}
                </button>
              </div>
            </div>
            {showSubmitError && <p>{errorMsg}</p>}
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
