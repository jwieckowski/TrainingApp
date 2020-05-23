const appName = process.env.APP_NAME || 'default'
const collectionName = `${appName}-body`

async function getBodyData (db) {
  return db.collection(collectionName).find({}).toArray()
}

async function addBodyData (db, data) {
  return db.collection(collectionName).insertOne(data)
}

async function updateBodyData (db, data) {
  return db.collection(collectionName).updateOne({ _id: parseInt(data._id) }, {
    $set: {
      weight: data.weight,
      bmi: data.bmi,
      fat: data.fat,
      muscle: data.muscle
    }
  })
}

async function dropBodyData (db) {
  return db.collection(collectionName).drop()
}

module.exports = {
  getBodyData,
  addBodyData,
  updateBodyData,
  dropBodyData
}
