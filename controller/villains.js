const villains = require('../villains')
const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll()

  return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
  const { slug } = request.params
  const foundVillain = await models.villains.findOne({ where: { slug } })

  return response.send(foundVillain)
}

const saveNewVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('The following fields are required: name, movie, slug')
  }

  const newVillain = { name, movie, slug }

  const villain = await models.villains.create(newVillain)

  return response.status(201).send(newVillain)
}

module.exports = {
  getAllVillains,
  getVillainBySlug,
  saveNewVillain,
}
