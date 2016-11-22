require('dotenv').config()
const jwt = require('express-jwt')

module.exports = jwt({
  secret: new Buffer(process.env.SECRET, 'base64'),
  audience: process.env.ID
})
