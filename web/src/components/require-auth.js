const React = require('react')
const Auth0Lock = require('auth0-lock').default
const { Link } = require('react-router')

const RequireAuth = Component => React.createClass({
  loggedIn() {
    return !!this.getToken()
  },
  getToken() {
    return localStorage.getItem('id_token')
  },
  render () {
    return (
      <div>
        {this.loggedIn() ? <Component {...this.props} /> :
          <div>
            Access Denied!
            <Link to="/">Return to Menu</Link>
          </div>
        }
      </div>
    )
  }
})

module.exports = RequireAuth
