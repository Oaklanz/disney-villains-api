const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('../../controller/villains.js')
const models = require('../../models')
// const { stub } = require('sinon')
const { villainsList } = require('../mocks/villains')

chai.use(sinonChai)
const { expect } = chai

describe('villains Controller', () => {
  describe('Get  All Villains', () => {
    it('gets list of villains from DB and calls respond.send() with that list', async () => {
      const stubbedFindAll = sinon.stub(models.villains, 'findAll').returns(villainsList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllVillains({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(villainsList)
    })
  })

  describe('Get Villain By Slug', () => {

  })

  describe('Save New Villain', () => {

  })
})

