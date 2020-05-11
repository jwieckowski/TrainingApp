// const schema = {
//   schema: {
//     response: {
//       200: {
//         $ref: 'dashboard-get-200.json'
//       }
//     }
//   }
// }

const dashboard = async function (fastify, options, next) {
  fastify.get('/', async function (request, reply) {
    reply.code(200).send('ok')
  })
  next()
}

module.exports = dashboard
