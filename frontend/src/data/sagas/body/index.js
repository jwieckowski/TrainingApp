import { takeLatest } from 'redux-saga/effects'
import { loadBodyDataSaga, addBodyDataSaga, updateBodyDataSaga, clickedItemBodySaga } from './bodySaga'
import actionTypes from '@constants/actionTypes'

export function * watchBodyData () {
  yield takeLatest(actionTypes.BODY_DATA_LOAD_ACTION, loadBodyDataSaga)
  yield takeLatest(actionTypes.BODY_DATA_ADD_ACTION, addBodyDataSaga)
  yield takeLatest(actionTypes.BODY_DATA_UPDATE_ACTION, updateBodyDataSaga)
  yield takeLatest(actionTypes.BODY_DATA_CLICKED_ITEM, clickedItemBodySaga)
}
