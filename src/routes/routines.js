const getSchema = {
  schema: {
    response: {
      200: {
        $ref: 'routines-get-200.json'
      }
    }
  }
}

const postSchema = {
  schema: {
    body: {
      $ref: 'routine-add-body.json'
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

const deleteSchema = {
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

const routines = async function (fastify, options, next) {
  fastify.get('/', getSchema, async function (req, rep) {
    const routines = await this.db.getRoutines(this.mongo.db)
    rep.code(200).send(routines)
  })

  fastify.post('/:id', postSchema, async function (req, rep) {
    const res = await this.db.addRoutine(this.mongo.db, req.body)
    rep.code(200).send(res)
  })

  fastify.delete('/:id', deleteSchema, async function (req, rep) {
    const res = await this.db.removeRoutine(this.mongo.db, req.params.id)
    rep.code(200).send(res)
  })

  fastify.get('/delete', async function (req, rep) {
    const res = await this.db.dropRoutines(this.mongo.db)
    rep.code(200).send(res)
  })
  next()
}

module.exports = routines
