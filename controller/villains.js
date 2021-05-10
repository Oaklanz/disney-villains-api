const { request, response } = require('express')
const villains = require('../villains.js')

const getAllVillains = (request, response) => {
  return response.send(villains)
}

const getByName = (request, response) => {
  const { searchString } = request.params
  const foundName = villains.filter((villian) =>
  {
    return villian.name.includes(searchString)
  })

  return response.send(foundName)
}


const saveNewVillain = (request, response) =>{
  console.log(request.body)//const {movies} = request.movies
}


module.exports = {
  getAllVillains,
  getByName
}
