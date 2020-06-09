const schema = {
  schema: {
    response: {
      200: {
        $ref: 'exercises-get-200.json'
      }
    }
  }
}
const exercisesList = require('../public/exercises.json')
const helpers = require('../plugins/db/helpers.js')

const exercises = async function (fastify, options, next) {
  fastify.get('/', schema, async function (request, reply) {
    const splitList = await helpers.splitPartGroups(exercisesList)
    const favorites = await this.db.getFavoriteExercises(this.mongo.db)
    const res = await helpers.joinFavoriteExercises(splitList, favorites)
    reply.code(200).send(res)
  })
  next()
}

module.exports = exercises
