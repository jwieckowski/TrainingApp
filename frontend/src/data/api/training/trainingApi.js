import axios from 'axios'

export function * loadTrainings () {
  const res = yield axios.get('api/v1/training')
  return res.data
}

export function * addTraining (training) {
  const res = yield axios.post(`api/v1/training/${training._id}`, {
    _id: training._id,
    date: training.date,
    activeExercises: training.activeExercises,
    trainingSeries: training.trainingSeries,
    routine: training.routine,
    routineExercises: training.routineExercises
  })
  return res
}
