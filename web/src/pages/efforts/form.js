const React = require('react')
const {Link, Redirect} = require('react-router')

const Service = require('../../components/service')
const ModelSelect = require('../../components/model-select')
const LocationSelect = Service(ModelSelect, 'locations')

const TextField = require('../../components/text-field')

const EffortForm = React.createClass({
  getInitialState: function() {
    return {
      success: false,
      effort: {}
    };
  },
  componentDidMount() {
    if (this.props.params.id) {
      this.props.get('efforts', this.props.params.id, (err, effort) => {
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
      this.props.post('efforts', effort, onResult)
    } else {
      this.props.put('efforts', effort.id, effort, onResult)
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
          <TextField label="Name"
            value={this.state.effort.name}
            onChange={this.handleChange('name')}
          />
          <TextField label="Description"
            value={this.state.effort.description}
            onChange={this.handleChange('description')}
          />
          <LocationSelect
            label="Locations"
            value={this.state.effort.location_id}
            onChange={this.handleChange('location_id')}
          />

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
