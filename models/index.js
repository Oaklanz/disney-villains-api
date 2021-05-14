const Sequalize = require('sequalize')
const villainsModel = require('./villains')

const connection = new Sequalize('villains', 'villainsUser', 'password123',
  { host: 'localhost', dialect: 'mysql' })

const villains = villainsModel(connection, Sequalize)

module.exports = { villains }
