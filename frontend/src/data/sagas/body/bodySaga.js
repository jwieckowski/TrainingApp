import * as actions from '../../actions/bodyActions'
import { put, call } from 'redux-saga/effects'
import { loadBodyData, addBodyData } from '../../api/body'

export function * loadBodyDataSaga () {
  yield put(actions.loadBodyDataStart())
  try {
    const bodyData = yield call(loadBodyData)
    yield put(actions.loadBodyDataSuccess(bodyData))
  } catch (error) {
    yield put(actions.loadBodyDataFail(error))
  }
}

export function * addBodyDataSaga ({ body }) {
  yield put(actions.addBodyDataStart())
  try {
    yield call(addBodyData, body)
    yield put(actions.addBodyDataSuccess(body))
  } catch (error) {
    yield put(actions.addBodyDataFail(error))
  }
}

export function * updateBodyDataSaga ({ updateBody }) {
  yield put(actions.updateBodyDataStart())
  try {
    yield call(addBodyData, updateBody)
    yield put(actions.updateBodyDataSuccess(updateBody))
  } catch (error) {
    yield put(actions.updateBodyDataFail(error))
  }
}

export function * clickedItemBodySaga () {
  // console.log('z sagi')
  // console.log(clickedItem)
  // yield put(actions.clickedItemBodyData(clickedItem))
}
