import * as actions from '../../actions/favoriteExercisesActions'
import { put, call } from 'redux-saga/effects'
import { loadFavoriteExercises, addFavoriteExercises, removeFavoriteExercises } from '../../api/favoriteExercises'

export function * loadFavoriteExercisesSaga () {
  yield put(actions.loadFavoriteExercisesStart())
  try {
    const favoriteExercises = yield call(loadFavoriteExercises)
    yield put(actions.loadFavoriteExercisesSuccess(favoriteExercises))
  } catch (error) {
    yield put(actions.loadFavoriteExercisesFail(error))
  }
}

export function * addFavoriteExercisesSaga ({ id }) {
  yield put(actions.addFavoriteExercisesStart())
  try {
    yield call(addFavoriteExercises, id)
    yield put(actions.loadFavoriteExercisesSuccess(id))
  } catch (error) {
    yield put(actions.loadFavoriteExercisesFail(error))
  }
}

export function * removeFavoriteExercisesSaga ({ id }) {
  yield put(actions.loadFavoriteExercisesStart())
  try {
    yield call(removeFavoriteExercises, id)
    yield put(actions.loadFavoriteExercisesSuccess(id))
  } catch (error) {
    yield put(actions.loadFavoriteExercisesFail(error))
  }
}
