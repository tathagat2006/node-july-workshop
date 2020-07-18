//steps to setup express project
// 1. npm init
// 2. npm install express --save

const express = require('express')
const app = express()

app.listen(3000, function() {
  console.log('listening on http://localhost:3000')
})