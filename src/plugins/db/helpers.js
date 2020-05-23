const defineBodyData = async (db, mongo, data) => {
  const body = await db.getBodyData(mongo)
  const res = await body.filter(r => r._id === data._id).length === 0
    ? db.addBodyData(mongo, data)
    : db.updateBodyData(mongo, data)
  return res
}

const sortBodyData = (data) => {
  return data.sort((a, b) => b._id - a._id)
}

module.exports = {
  defineBodyData,
  sortBodyData
}
