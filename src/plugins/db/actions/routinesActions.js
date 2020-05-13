const appName = process.env.APP_NAME || 'default'
const collectionName = `${appName}-routines`

async function getRoutines (db) {
  return db.collection(collectionName).find({}).toArray()
}

async function addRoutine (db, routine) {
  return db.collection(collectionName).insertOne(routine)
}

async function removeRoutine (db, id) {
  return db.collection(collectionName).deleteOne({"_id": parseInt(id) })
}

async function dropRoutines (db) {
  return db.collection(collectionName).drop()
}

module.exports = {
  getRoutines,
  addRoutine,
  removeRoutine,
  dropRoutines
}
