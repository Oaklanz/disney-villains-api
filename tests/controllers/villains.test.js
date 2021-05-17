const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const {describe, it} = require('mocha')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('../../controller/villains.js')
const moedels = require('../../models')
const { stub } = require('sinon')

chai.use(sinonChai)
const { expect } = chai

describe('villains Controller', () => {
describe('Get  All Villains', () ={
it('gets list of villains from DB and calls respond.send() with that list', async () => {
    const stubbedFindAll = sinon.stub(models.villains,'findAll')
    const stubbedSend = sinon.stub()
    const response  = {send: stubbedSend}

    await getAllVillains({}, response)
} )
})

describe('Get Villain By Slug', () =>{

})

describe('Save New Villain', () => {

})

})

