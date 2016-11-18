const React = require('react')

const { BrowserRouter, Match } = require('react-router')

const { Home, About,
  Persons, Person, PersonForm,
  Efforts, Effort, EffortForm,
  Locations, Location, LocationForm
} = require('./pages')

const Service = require('./components/service')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />

          <Match exactly pattern="/persons" component={Service(Persons, 'persons')} />
          <Match pattern="/persons/:id/show" component={Service(Person, 'persons')} />
          <Match pattern="/persons/new" component={Service(PersonForm, 'persons')} />
          <Match pattern="/persons/:id/edit" component={Service(PersonForm, 'persons')} />

          <Match exactly pattern="/efforts" component={Service(Efforts, 'efforts')} />
          <Match pattern="/efforts/:id/show" component={Service(Effort, 'efforts')} />
          <Match pattern="/efforts/new" component={Service(EffortForm, 'efforts')} />
          <Match pattern="/efforts/:id/edit" component={Service(EffortForm, 'efforts')} />

          <Match exactly pattern="/locations" component={Service(Locations, 'locations')} />
          <Match pattern="/locations/:id/show" component={Service(Location, 'locations')} />
          <Match pattern="/locations/new" component={Service(LocationForm, 'locations')} />
          <Match pattern="/locations/:id/edit" component={Service(LocationForm, 'locations')} />

          <Match pattern="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
