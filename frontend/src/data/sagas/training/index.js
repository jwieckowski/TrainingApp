import { takeLatest } from 'redux-saga/effects'
import { addTrainingSeriesSaga, loadTrainingsSaga, addTrainingSaga } from './trainingSaga'
import actionTypes from '@constants/actionTypes'

export function * watchTraining () {
  yield takeLatest(actionTypes.TRAINING_ADD_SERIES_ACTION, addTrainingSeriesSaga)
  yield takeLatest(actionTypes.TRAINING_LOAD_ACTION, loadTrainingsSaga)
  yield takeLatest(actionTypes.TRAINING_ADD_ACTION, addTrainingSaga)
}
