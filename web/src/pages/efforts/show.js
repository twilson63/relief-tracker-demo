const React = require('react')
const {Link} = require('react-router')
const Effort = React.createClass({
  getInitialState: function() {
    return {
      effort: {}
    };
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (err, effort) => {
      if (err) return console.log(err.message)
      this.setState({effort})
    })
  },
  render() {
    const effort = this.state.effort || {}
    return (
      <div>
        <h3>{effort.name}</h3>
        <p>{effort.description}</p>
        <Link to="/efforts">Efforts</Link>
        |
        <Link to={`/efforts/${effort.id}/edit`}>Edit Effort</Link>
        |
        <button>Remove</button>
      </div>
    )
  }
})

module.exports = Effort
