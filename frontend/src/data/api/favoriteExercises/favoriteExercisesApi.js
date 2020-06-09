import axios from 'axios'

export function * loadFavoriteExercises () {
  const res = yield axios.get('api/v1/favorite')
  return res.data
}

export function * addFavoriteExercises (id) {
  const res = yield axios.post(`api/v1/favorite/${id}`)
  return res
}

export function * removeFavoriteExercises (id) {
  const res = yield axios.delete(`api/v1/favorite/${id}`)
  return res
}
