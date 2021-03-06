import * as actions from '../../actions/trainingActions'
import { put, call } from 'redux-saga/effects'
import { loadTrainings, addTraining } from '../../api/training'

export function * addTrainingSeriesSaga ({ weight, reps, exerciseID }) {
}

export function * loadTrainingsSaga () {
  yield put(actions.loadTrainingsStart())
  try {
    const historyTrainings = yield call(loadTrainings)
    yield put(actions.loadTrainingsSuccess(historyTrainings.reverse()))
  } catch (error) {
    yield put(actions.loadTrainingsFail(error))
  }
}

export function * addTrainingSaga ({ training }) {
  yield put(actions.addTrainingStart())
  try {
    yield call(addTraining, training)
    yield put(actions.addTrainingSuccess(training))
  } catch (error) {
    yield put(actions.addTrainingFail(error))
  }
}

export function * startTrainingSaga () {
}

export function * endTrainingSaga () {
}