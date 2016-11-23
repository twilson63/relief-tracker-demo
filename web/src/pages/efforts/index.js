const React = require('react')
const { Link } = require('react-router')

const effortItem = require('./item')

const Efforts = React.createClass({
  getInitialState() {
    return {
      efforts: []
    }
  },
  componentDidMount() {
    this.props.allDocs('efforts',(e, efforts) => {
      if (e) return console.log(e.message)
      this.setState({efforts})
    })
  },
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/efforts/new">Add New</Link>
            |
            <Link to="/">Menu</Link>
          </nav>
          <h3>Efforts</h3>
        </header>
        <main>
          <ul>
            {this.state.efforts.map(effortItem)}
          </ul>
        </main>
      </div>
    )
  }
})

module.exports = Efforts
