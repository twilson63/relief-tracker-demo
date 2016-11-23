const React = require('react')

const { BrowserRouter, Match } = require('react-router')

const { Home, About,
  Persons, Person, PersonForm,
  Efforts, Effort, EffortForm,
  Locations, Location, LocationForm
} = require('./pages')

const Service = require('./components/service')
const Auth = require('./components/auth')
const RequireAuth = require('./components/require-auth')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Auth(Home)} />

          <Match exactly pattern="/persons" component={RequireAuth(Service(Persons))} />
          <Match pattern="/persons/:id/show" component={RequireAuth(Service(Person))} />
          <Match pattern="/persons/new" component={RequireAuth(Service(PersonForm))} />
          <Match pattern="/persons/:id/edit" component={RequireAuth(Service(PersonForm))} />

          <Match exactly pattern="/efforts" component={RequireAuth(Service(Efforts))} />
          <Match pattern="/efforts/:id/show" component={RequireAuth(Service(Effort))} />
          <Match pattern="/efforts/new" component={RequireAuth(Service(EffortForm))} />
          <Match pattern="/efforts/:id/edit" component={RequireAuth(Service(EffortForm))} />

          <Match exactly pattern="/locations" component={RequireAuth(Service(Locations))} />
          <Match pattern="/locations/:id/show" component={RequireAuth(Service(Location))} />
          <Match pattern="/locations/new" component={RequireAuth(Service(LocationForm))} />
          <Match pattern="/locations/:id/edit" component={RequireAuth(Service(LocationForm))} />

          <Match pattern="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
