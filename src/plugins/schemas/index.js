const fp = require('fastify-plugin')
const path = require('path')

function registerSchemas (fastify, options, next) {
  fastify.addSchema(require(path.resolve('./src/docs/schemas/generic-error.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/id.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/routines-get-200.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/routine-add-body.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/body-data-get-200.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/body-data-add-body.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/exercises-get-200.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/exercise-body.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/record-body-data.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/records-get-200.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/training-get-200.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/training-add-body.json')))
  next()
}

module.exports = fp(registerSchemas)
