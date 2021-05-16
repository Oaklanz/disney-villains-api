const express = require('express')
const bodyParser = require('body-parser')
const villains = require('./villains.js')

const { getAllVillains, getVillainBySlug, saveNewVillain } = require('./controller/villains.js')


const app = express()

app.get('/:villains', getAllVillains)

app.get('/:slug', getVillainBySlug)

app.post('/villains', bodyParser.json(), saveNewVillain)



app.listen(1337, () => {
  console.log('listening on port 1337...')// eslint-disable-line no-console
})

