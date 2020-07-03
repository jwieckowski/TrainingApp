const fp = require('fastify-plugin')
const routines = require('./routinesActions')
const body = require('./bodyActions')
const favoriteExercises = require('./favoritesExerciseActions')
const training = require('./trainingActions.js')
const records = require('./recordsActions.js')

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
    dropFavoriteExercices: favoriteExercises.dropFavoriteExercices,
    getTrainings: training.getTrainings,
    addTraining: training.addTraining,
    dropTrainings: training.dropTrainings,
    getRecords: records.getRecords,
    addRecord: records.addRecord,
    updateRecord: records.updateRecord,
    dropRecords: records.dropRecords
  })

  next()
})
