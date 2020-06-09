const schema = {
  schema: {
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: {
          type: 'number'
        }
      }
    }
  }
}
const favorite = async function (fastify, options, next) {
  fastify.get('/', async function (request, reply) {
    const res = await this.db.getFavoriteExercises(this.mongo.db)
    reply.code(200).send(res)
  })
  fastify.post('/:id', schema, async function (req, rep) {
    const res = await this.db.addFavoriteExercise(this.mongo.db, req.params.id)
    rep.code(200).send(res)
  })

  fastify.delete('/:id', schema, async function (req, rep) {
    const res = await this.db.removeFavoriteExercise(this.mongo.db, req.params.id)
    rep.code(200).send(res)
  })

  fastify.get('/delete', async function (req, rep) {
    const res = await this.db.dropFavoriteExercices(this.mongo.db)
    rep.code(200).send(res)
  })
  next()
}

module.exports = favorite
