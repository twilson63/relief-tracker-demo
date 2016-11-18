const React = require('react')

const { Link, Redirect } = require('react-router')

const Location = React.createClass({
  getInitialState: function() {
    return {
      location: {
        name: 'default',
        lat: 51.505,
        long: -0.09
      }
    };
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (err, location) => {
      if (err) return console.log(err.message)
      this.setState({location})
    })
  },
  render() {
    const location = this.state.location || {}
    return (
      <div>
        <h3>{location.name}</h3>
        <img src="http://placekitten.com/300" />
        <Link to="/locations">Locations</Link>
        |
        <Link to={`/locations/${location.id}/edit`}>Edit Location</Link>
        |
        <button>Remove</button>
      </div>
    )
  }
})

module.exports = Location
