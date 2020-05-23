const fp = require('fastify-plugin')
const routines = require('./routinesActions')
const body = require('./bodyActions')

module.exports = fp(function (fastify, options, next) {
  fastify.decorate('db', {
    getRoutines: routines.getRoutines,
    addRoutine: routines.addRoutine,
    removeRoutine: routines.removeRoutine,
    dropRoutines: routines.dropRoutines,
    getBodyData: body.getBodyData,
    addBodyData: body.addBodyData,
    updateBodyData: body.updateBodyData,
    dropBodyData: body.dropBodyData
  })

  next()
})
