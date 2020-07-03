import * as actions from '../../actions/recordsActions'
import { put, call } from 'redux-saga/effects'
import { loadRecords, addRecord } from '../../api/records'

export function * loadRecordsSaga () {
  yield put(actions.loadRecordsStart())
  try {
    const records = yield call(loadRecords)
    yield put(actions.loadRecordsSuccess(records))
  } catch (error) {
    yield put(actions.loadRecordsFail(error))
  }
}

export function * addRecordSaga ({ record }) {
  yield put(actions.addRecordStart())
  try {
    yield call(addRecord, record)
    yield put(actions.addRecordSuccess(record))
  } catch (error) {
    yield put(actions.addRecordFail(error))
  }
}
