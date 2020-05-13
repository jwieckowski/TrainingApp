const fp = require('fastify-plugin')
const routines = require('./routinesActions')

module.exports = fp(function (fastify, options, next) {
  fastify.decorate('db', {
    getRoutines: routines.getRoutines,
    addRoutine: routines.addRoutine,
    removeRoutine: routines.removeRoutine,
    dropRoutines: routines.dropRoutines
  })

  next()
})
