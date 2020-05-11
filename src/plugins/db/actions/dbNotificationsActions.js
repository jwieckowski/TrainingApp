const appName = process.env.APP_NAME || 'default'
const collectionName = `${appName}-notifications`

async function getNotifications (db) {
  const res = await db.collection(collectionName).find({}).toArray()
  return res.map(notification => {
    notification = {
      ...notification,
      id: notification._id
    }
    delete notification._id
    return notification
  })
}

async function postNotification (db, notification) {
  return db.collection(collectionName).insertOne(notification)
}

async function updateNotification (db, id) {
  return db.collection(collectionName).updateOne({"_id": id }, { $set: { "isChecked": true } })
}

async function deleteNotifications (db) {
  return db.collection(collectionName).drop()
}

module.exports = {
  getNotifications,
  postNotification,
  updateNotification,
  deleteNotifications
}
