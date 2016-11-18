const React = require('react')
const {Link} = require('react-router')
module.exports = person =>
  <li key={person.id}>
    <Link to={`/persons/${person.id}/show`}>
      {person.firstName + ' ' + person.lastName}
    </Link>
  </li>
