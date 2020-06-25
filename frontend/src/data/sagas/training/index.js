import { takeLatest } from 'redux-saga/effects'
import { addTrainingSeriesSaga, loadTrainingsSaga, addTrainingSaga, startTrainingSaga, endTrainingSaga   } from './trainingSaga'
import actionTypes from '@constants/actionTypes'

export function * watchTraining () {
  yield takeLatest(actionTypes.TRAINING_ADD_SERIES_ACTION, addTrainingSeriesSaga)
  yield takeLatest(actionTypes.TRAINING_LOAD_ACTION, loadTrainingsSaga)
  yield takeLatest(actionTypes.TRAINING_ADD_ACTION, addTrainingSaga)
  yield takeLatest(actionTypes.TRAINING_START_ACTION, startTrainingSaga)
  yield takeLatest(actionTypes.TRAINING_END_ACTION, endTrainingSaga)
}
