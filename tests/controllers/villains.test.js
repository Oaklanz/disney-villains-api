const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('../../controller/villains.js')
const models = require('../../models')
// const { stub } = require('sinon')
const { villainsList, singleVillain } = require('../mocks/villains')

chai.use(sinonChai)
const { expect } = chai

describe('villains Controller', () => {
  describe('GetAllVillains', () => {
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
    it('get a single villain associated with the slug in the DB and calls response.send() with it', async () => {
      const stubbedFindOne = sinon.stub(models.villains, 'findOne').returns(singleVillain)
      const request = { params: { slug: 'gaston' } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getVillainBySlug(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'gaston' } })
      expect(stubbedSend).to.have.been.calledWith(singleVillain)
    })
  })

  describe('Save New Villain', () => {
    it('accepts new villain and saves it in the DB, returning the saved record with a 201 status', async () => {
      const request = { body: singleVillain }
      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const response = { status: stubbedStatus }
      const stubbedCreate = sinon.stub(models.villains, 'create').returns(singleVillain)

      await saveNewVillain(request, response)
      expect(stubbedCreate).to.have.been.calledWith(singleVillain)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(singleVillain)
    })
  })
})
