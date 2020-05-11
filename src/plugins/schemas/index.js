const fp = require('fastify-plugin')
const path = require('path')

function registerSchemas (fastify, options, next) {
  // fastify.addSchema(require(path.resolve('./src/docs/schemas/endpoints/get/dashboard.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/dashboard-get-200.json')))
  fastify.addSchema(require(path.resolve('./src/docs/schemas/generic-error.json')))

  next()
}

module.exports = fp(registerSchemas)
