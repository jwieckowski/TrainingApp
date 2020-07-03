import { all } from 'redux-saga/effects'
import { watchRoutines } from '../../data/sagas/routines'
import { watchBodyData } from '../../data/sagas/body'
import { watchExercises } from '../../data/sagas/exercises'
import { watchFavoriteExercises } from '../../data/sagas/favoriteExercises'
import { watchTraining } from '../../data/sagas/training'
import { watchRecords } from '../../data/sagas/records'

// Here should be added future sagas watchers
export default function * rootSaga () {
  yield all([
    watchRoutines(),
    watchBodyData(),
    watchExercises(),
    watchFavoriteExercises(),
    watchTraining(),
    watchRecords()
  ])
}
