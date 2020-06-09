import { takeLatest } from 'redux-saga/effects'
import { loadFavoriteExercisesSaga, addFavoriteExercisesSaga, removeFavoriteExercisesSaga } from './favoriteExercisesSaga.js'
import actionTypes from '@constants/actionTypes'

export function * watchFavoriteExercises () {
  yield takeLatest(actionTypes.FAVORITE_EXERCISES_LOAD_ACTION, loadFavoriteExercisesSaga)
  yield takeLatest(actionTypes.FAVORITE_EXERCISES_ADD_ACTION, addFavoriteExercisesSaga)
  yield takeLatest(actionTypes.FAVORITE_EXERCISES_REMOVE_ACTION, removeFavoriteExercisesSaga)
}
