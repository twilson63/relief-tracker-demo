const React = require('react')
const { Link } = require('react-router')

const locationItem = require('./item')

const Locations = React.createClass({
  getInitialState() {
    return {
      locations: []
    }
  },
  componentDidMount() {
    this.props.allDocs((e, locations) => {
      if (e) return console.log(e.message)
      this.setState({locations})
    })
  },
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/locations/new">Add New</Link>
            |
            <Link to="/">Menu</Link>
          </nav>
          <h3>Locations</h3>
        </header>
        <main>
          <ul>
            {this.state.locations.map(locationItem)}
          </ul>
        </main>
      </div>
    )
  }
})

module.exports = Locations
