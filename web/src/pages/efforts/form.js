const React = require('react')
const {Link, Redirect} = require('react-router')

const EffortForm = React.createClass({
  getInitialState: function() {
    return {
      success: false,
      effort: {}
    };
  },
  componentDidMount() {
    if (this.props.params.id) {
      this.props.get(this.props.params.id, (err, effort) => {
        if (err) return console.log(err.message)
        this.setState({effort})
      })
    }
  },
  handleChange (field) {
    return e => {
      let effort = this.state.effort
      effort[field] = e.target.value
      this.setState({effort})
    }
  },
  handleSubmit (e) {
    e.preventDefault()

    let effort = this.state.effort

    const onResult = (e,r) => {
      if (e) return console.log(e.message)
      this.setState({success: true})
    }

    if (!effort.id) {
      this.props.post(effort, onResult)
    } else {
      this.props.put(effort.id, effort, onResult)
    }

  },

  render() {
    const labelStyle = {display: 'block'}
    const effort = this.state.effort || {}

    return (
      <div>
        { this.state.success ? <Redirect to="/efforts" /> : null }
        <h3>Effort Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle}>Name</label>
            <input type="text"
              value={this.state.effort.name}
              onChange={this.handleChange('name')} />
          </div>
          <div>
            <label style={labelStyle}>Description</label>
            <input type="text"
              value={this.state.effort.description}
              onChange={this.handleChange('description')} />
          </div>
          <div>
            <label style={labelStyle}>Location</label>
            <select></select>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <Link to="/efforts">Efforts</Link>
      </div>
    )
  }
})

module.exports = EffortForm
