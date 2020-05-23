const getSchema = {
  schema: {
    response: {
      200: {
        $ref: 'body-data-get-200.json'
      }
    }
  }
}

const postSchema = {
  schema: {
    body: {
      $ref: 'body-data-add-body.json'
    },
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

const helpers = require('../plugins/db/helpers.js')

const body = async function (fastify, options, next) {
  fastify.get('/', getSchema, async function (req, rep) {
    const body = await this.db.getBodyData(this.mongo.db)
    const res = helpers.sortBodyData(body)
    rep.code(200).send(res)
  })

  fastify.post('/:id', postSchema, async function (req, rep) {
    const res = await helpers.defineBodyData(this.db, this.mongo.db, req.body)
    rep.code(200).send(res)
  })

  fastify.get('/delete', async function (req, rep) {
    const res = await this.db.dropBodyData(this.mongo.db)
    rep.code(200).send(res)
  })
  next()
}

module.exports = body
