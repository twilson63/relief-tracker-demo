const React = require('react')

const { Link, Redirect } = require('react-router')

const PersonForm = React.createClass({
  getInitialState: function() {
    return {
      success: false,
      person: {}
    };
  },
  componentDidMount() {
    if (this.props.params.id) {
      this.props.get('persons', this.props.params.id, (err, person) => {
        if (err) return console.log(err.message)
        this.setState({person})
      })
    }
  },
  handleChange (field) {
    return e => {
      let person = this.state.person
      person[field] = e.target.value
      this.setState({person})
    }
  },
  handleSubmit (e) {
    e.preventDefault()

    let person = this.state.person

    const onResult = (e,r) => {
      if (e) return console.log(e.message)
      this.setState({success: true})
    }

    if (!person.id) {
      this.props.post(person, onResult)
    } else {
      this.props.put(person.id, person, onResult)
    }

  },
  render() {
    const labelStyle = {display: 'block'}
    const person = this.state.person || {}
    return (
      <div>
        { this.state.success ? <Redirect to="/persons" /> : null }
        <h3>Person Form</h3>
        <form onSubmit={this.handleSubmit}>
          <legend>Person Name</legend>
          <div>
            <label style={labelStyle}>First Name</label>
            <input type="text"
              value={this.state.person.firstName}
              onChange={this.handleChange('firstName')} />
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input type="text"
              value={this.state.person.lastName}
              onChange={this.handleChange('lastName')} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email"
              value={this.state.person.email}
              onChange={this.handleChange('email')} />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input type="text"
              value={this.state.person.phone}
              onChange={this.handleChange('phone')} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <Link to="/persons">Persons</Link>
      </div>
    )
  }
})

module.exports = PersonForm
