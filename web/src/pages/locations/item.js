const React = require('react')
const {Link} = require('react-router')
module.exports = location =>
  <li key={location.id}>
    <Link to={`/locations/${location.id}/show`}>
      {location.name}
    </Link>
  </li>
