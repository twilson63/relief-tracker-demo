const React = require('react')
const {Link} = require('react-router')

const Service = require('../../components/service')
const LocationShowBase = require('./location-show')
const LocationShow = Service(LocationShowBase, 'locations')

const Effort = React.createClass({
  getInitialState: function() {
    return {
      effort: {
        members: []
      },
      persons: []
    };
  },
  componentDidMount() {
    this.props.get('efforts', this.props.params.id, (err, effort) => {
      if (err) return console.log(err.message)
      if (!effort.members) effort.members = []
      this.setState({effort})
    })
    this.props.allDocs('persons', (err, persons) => {
      this.setState({persons})
    })
  },
  addMember (person) {
    return (e) => {
      let members = this.state.effort.members.filter(member =>
        member.id !== person.id)
      let effort = {...this.state.effort}
      effort.members = [person, ...members]
      this.setState({effort})

    }
  },
  removeMember (m) {
    return (e) => {
      let members = this.state.effort.members.filter(member =>
        member.id !== m.id)
      let effort = {...this.state.effort}
      effort.members = members
      this.setState({effort})

    }
  },
  updateTeam (e) {
    e.preventDefault()
    this.props.put('efforts', this.state.effort.id, this.state.effort, (err, res) => {
      if (err) return console.log(err.message)
      alert('Successfully updated team!')
    })
  },
  render() {
    const effort = this.state.effort || {}
    return (
      <div>

        <h3>{effort.name}</h3>
        <p>{effort.description}</p>
        { effort.location_id ? <LocationShow id={effort.location_id} /> : null }
        <div>
        <div style={{float: 'left'}}>
        <h3>People</h3>
        <ul>
          {this.state.persons.map(p =>
            <li key={p.id}>
              {p.firstName + ' ' + p.lastName}
              <button onClick={this.addMember(p)}>Add Member</button>
            </li>
          )}
        </ul>
        </div>
        <div style={{float: 'left'}}>
        <h3>Team</h3>
        <ul>
          {this.state.effort.members.map(m =>
            <li key={m.id}>
              {m.firstName + ' ' + m.lastName}
              <button onClick={this.removeMember(m)}>Remove</button>
            </li>
          )}
        </ul>
        </div>
        </div>
        <div style={{clear: 'both'}}></div>
        <div>
          <hr />
        <button onClick={this.updateTeam}>update team</button>
        |
        <Link to="/efforts">Efforts</Link>
        |
        <Link to={`/efforts/${effort.id}/edit`}>Edit Effort</Link>
        |

        </div>

      </div>
    )
  }
})

module.exports = Effort
