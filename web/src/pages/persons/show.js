const React = require('react')

const { Link, Redirect } = require('react-router')

const Person = React.createClass({
  getInitialState: function() {
    return {
      person: {}
    };
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (err, person) => {
      if (err) return console.log(err.message)
      this.setState({person})
    })
  },
  render() {
    const person = this.state.person || {}
    return (
      <div>
        <h3>{person.firstName + ' ' + person.lastName}</h3>
        <p>{person.email}</p>
        <p>{person.phone}</p>
        <Link to="/persons">Persons</Link>
        |
        <Link to={`/persons/${person.id}/edit`}>Edit Person</Link>
        |
        <button>Remove</button>
      </div>
    )
  }
})

module.exports = Person
