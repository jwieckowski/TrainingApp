import { takeLatest } from 'redux-saga/effects'
import { loadRecordsSaga, addRecordSaga } from './recordsSaga'
import actionTypes from '@constants/actionTypes'

export function * watchRecords () {
  yield takeLatest(actionTypes.RECORD_LOAD_ACTION, loadRecordsSaga)
  yield takeLatest(actionTypes.RECORD_ADD_ACTION, addRecordSaga)
}
