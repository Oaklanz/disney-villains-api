const express = require('express')

const villains = require('./villains.js')

const app = express()

app.get('/', (request, response) => {
  return response.send(villains)
})







app.listen(1337, () => {
  console.log('listening on port 1337...')// eslint-disable-line no-console
})

