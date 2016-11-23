const React = require('react')
const {Link, Redirect} = require('react-router')

const LocationForm = React.createClass({
  getInitialState: function() {
    return {
      success: false,
      location: {}
    };
  },
  componentDidMount() {
    if (this.props.params.id) {
      this.props.get('locations', this.props.params.id, (err, location) => {
        if (err) return console.log(err.message)
        this.setState({location})
      })
    }
  },
  handleChange (field) {
    return e => {
      let location = this.state.location
      location[field] = e.target.value
      this.setState({location})
    }
  },
  handleSubmit (e) {
    e.preventDefault()

    let location = this.state.location

    const onResult = (e,r) => {
      if (e) return console.log(e.message)
      this.setState({success: true})
    }

    if (!location.id) {
      this.props.post('locations', location, onResult)
    } else {
      this.props.put('locations', location.id, location, onResult)
    }

  },

  render() {
    const labelStyle = {display: 'block'}
    const location = this.state.location || {}

    return (
      <div>
        { this.state.success ? <Redirect to="/locations" /> : null }
        <h3>Location Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle}>Name</label>
            <input type="text"
              value={this.state.location.name}
              onChange={this.handleChange('name')} />
          </div>
          <div>
            <label style={labelStyle}>Latitude</label>
            <input type="text"
              value={this.state.location.lat}
              onChange={this.handleChange('lat')} />
          </div>
          <div>
            <label style={labelStyle}>Longitude</label>
            <input type="text"
              value={this.state.location.long}
              onChange={this.handleChange('long')} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <Link to="/locations">Locations</Link>
      </div>
    )

  }
})

module.exports = LocationForm
