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

const splitPartGroups = (exercises) => {
  const parts = [...new Set(exercises.map(e => e.type))]
  const exerciseParts = {}
  for (const part of parts) {
    exerciseParts[`${part}`] = exercises.filter(exercise => exercise.type === part)
  }
  return exerciseParts
}

const joinFavoriteExercises = (exercises, favorites) => {
  const favoritesID = favorites.map(f => parseInt(f.id))
  const keys = Object.keys(exercises)
  for (const key of keys) {
    exercises[`${key}`] = exercises[`${key}`].map(v => {
      v = favoritesID.includes(v._id) ? { ...v, favorite: true } : v
      return v
    })
  }
  return exercises
}

const defineRoutine = async (db, mongo, routine) => {
  const routines = await db.getRoutines(mongo)
  const res = await routines.filter(r => r._id === routine._id).length === 0
    ? db.addRoutine(mongo, routine)
    : db.updateRoutine(mongo, routine)
  return res
}

module.exports = {
  defineBodyData,
  sortBodyData,
  splitPartGroups,
  joinFavoriteExercises,
  defineRoutine
}
