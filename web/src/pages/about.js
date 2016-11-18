const React = require('react')
const { Link } = require('react-router')

module.exports = _ =>
  <div>
    <header>
      <h3>Relief Tracker - About</h3>
    </header>
    <main>
      <h4>What is the Relief Tracker</h4>
      <p>Relief tracker is a simple application for organizing relief efforts accross the globe.</p>
      <Link to="/">Return to Menu</Link>
    </main>
  </div>
