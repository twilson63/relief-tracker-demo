const React = require('react')
const { Link } = require('react-router')

const Home = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h3>Relief Tracker</h3>
        </header>
        <main>
          <h4>Menu</h4>
          <ul>
            <li><Link to="/efforts">Efforts</Link></li>
            <li><Link to="/persons">Persons</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </main>
      </div>
    )
  }
})

module.exports = Home
