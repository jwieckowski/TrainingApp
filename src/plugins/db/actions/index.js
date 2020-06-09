const fp = require('fastify-plugin')
const routines = require('./routinesActions')
const body = require('./bodyActions')
const favoriteExercises = require('./favoritesExerciseActions')

module.exports = fp(function (fastify, options, next) {
  fastify.decorate('db', {
    getRoutines: routines.getRoutines,
    addRoutine: routines.addRoutine,
    updateRoutine: routines.updateRoutine,
    removeRoutine: routines.removeRoutine,
    dropRoutines: routines.dropRoutines,
    getBodyData: body.getBodyData,
    addBodyData: body.addBodyData,
    updateBodyData: body.updateBodyData,
    dropBodyData: body.dropBodyData,
    getFavoriteExercises: favoriteExercises.getFavoriteExercises,
    addFavoriteExercise: favoriteExercises.addFavoriteExercise,
    removeFavoriteExercise: favoriteExercises.removeFavoriteExercise,
    dropFavoriteExercices: favoriteExercises.dropFavoriteExercices
  })

  next()
})
