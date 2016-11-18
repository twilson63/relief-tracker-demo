const React = require('react')
const {Link} = require('react-router')
module.exports = effort =>
  <li key={effort.id}>
    <Link to={`/efforts/${effort.id}/show`}>
      {effort.name}
    </Link>
  </li>
