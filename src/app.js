const path = require('path')

module.exports = function ({ port }) {
  const app = require('fastify')({ logger: true })
  const serveStatic = require('serve-static')

  app.use('/', serveStatic(path.join(__dirname, '..', 'frontend', 'dist')))

  app
    .register(require('./plugins/schemas'))
    .register((instance, opts, next) => {
      instance.register(require('fastify-swagger'), {
        mode: 'static',
        routePrefix: '/documentation',
        specification: {
          path: './src/docs/openapi.json',
          baseDir: path.join(__dirname, 'docs')
        },
        exposeRoute: true
      })
        .ready(err => {
          if (err) throw err
          instance.swagger()
        })

      next()
    },
    {
      prefix: '.well-known'
    })

  app.register(require('./plugins/db'))
  app.register(require('./plugins/db/actions'))

  app.register(require('./routes/routines'), {
    prefix: '/api/v1/routines'
  })

  app.register(require('./routes/body'), {
    prefix: '/api/v1/body'
  })

  app.register(require('./routes/exercises'), {
    prefix: '/api/v1/exercises'
  })

  app.register(require('./routes/favoriteExercises'), {
    prefix: '/api/v1/favorite'
  })


  app.register(require('./routes/catch-all/catch-all-api-404'), {
    prefix: '/api'
  })

  app.register(require('./routes/catch-all/catch-all'))

  return app
}
