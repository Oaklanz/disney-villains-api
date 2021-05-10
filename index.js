const express = require('express')

const villains = require('./villains.js')

const { getAllVillains, getByName } = require('./controller/villains.js')



const app = express()

app.get('/', getAllVillains)

app.get('/villains/:searchString', getByName)

app.post('/villains', bodyParser.json(), saveNewVillain)





app.listen(1337, () => {
  console.log('listening on port 1337...')// eslint-disable-line no-console
})

