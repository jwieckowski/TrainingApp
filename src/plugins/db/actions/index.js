const fp = require('fastify-plugin')
const notifications = require('./dbNotificationsActions')

module.exports = fp(function (fastify, options, next) {
  fastify.decorate('db', {
    getNotifications: notifications.getNotifications,
    postNotification: notifications.postNotification,
    updateNotification: notifications.updateNotification,
    deleteNotifications: notifications.deleteNotifications
  })

  next()
})
