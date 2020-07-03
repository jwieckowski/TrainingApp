const helpers = require('../plugins/db/helpers.js')

const getSchema = {
  schema: {
    response: {
      200: {
        $ref: 'records-get-200.json'
      }
    }
  }
}

const postSchema = {
  schema: {
    body: {
      $ref: 'record-body-data.json'
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

const records = async function (fastify, options, next) {
  fastify.get('/', postSchema, async function (req, rep) {
    const routines = await this.db.getRecords(this.mongo.db)
    rep.code(200).send(routines)
  })

  fastify.post('/:id', postSchema, async function (req, rep) {
    const res = await helpers.defineRecord(this.db, this.mongo.db, req.body)
    rep.code(200).send(res)
  })

  fastify.get('/delete', async function (req, rep) {
    const res = await this.db.dropRecords(this.mongo.db)
    rep.code(200).send(res)
  })
  next()
}

module.exports = records
