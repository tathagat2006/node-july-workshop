const express = require('express')
const route = express.Router()

const users = ["Tathagat", "Arnav"]

route.get('/users', function(req, res) {
  res.send(users)
})

module.exports = route