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

          <Match exactly pattern="/persons" component={RequireAuth(Service(Persons, 'persons'))} />
          <Match pattern="/persons/:id/show" component={RequireAuth(Service(Person, 'persons'))} />
          <Match pattern="/persons/new" component={RequireAuth(Service(PersonForm, 'persons'))} />
          <Match pattern="/persons/:id/edit" component={RequireAuth(Service(PersonForm, 'persons'))} />

          <Match exactly pattern="/efforts" component={RequireAuth(Service(Efforts, 'efforts'))} />
          <Match pattern="/efforts/:id/show" component={RequireAuth(Service(Effort, 'efforts'))} />
          <Match pattern="/efforts/new" component={RequireAuth(Service(EffortForm, 'efforts'))} />
          <Match pattern="/efforts/:id/edit" component={RequireAuth(Service(EffortForm, 'efforts'))} />

          <Match exactly pattern="/locations" component={RequireAuth(Service(Locations, 'locations'))} />
          <Match pattern="/locations/:id/show" component={RequireAuth(Service(Location, 'locations'))} />
          <Match pattern="/locations/new" component={RequireAuth(Service(LocationForm, 'locations'))} />
          <Match pattern="/locations/:id/edit" component={RequireAuth(Service(LocationForm, 'locations'))} />

          <Match pattern="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
