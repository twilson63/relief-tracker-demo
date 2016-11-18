const React = require('react')
const { Link } = require('react-router')

const personItem = require('./item')

const Persons = React.createClass({
  getInitialState() {
    return {
      persons: []
    }
  },
  componentDidMount() {
    this.props.allDocs((e, persons) => {
      if (e) return console.log(e.message)
      this.setState({persons})
    })
  },
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/persons/new">Add New</Link>
            |
            <Link to="/">Menu</Link>
          </nav>
          <h3>Persons</h3>
        </header>
        <main>
          <ul>
            {this.state.persons.map(personItem)}
          </ul>
        </main>
      </div>
    )
  }
})

module.exports = Persons
