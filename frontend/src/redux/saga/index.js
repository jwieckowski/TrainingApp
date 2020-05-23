import { all } from 'redux-saga/effects'
import { watchRoutines } from '../../data/sagas/routines'
import { watchBodyData } from '../../data/sagas/body'

// Here should be added future sagas watchers
export default function * rootSaga () {
  yield all([
    watchRoutines(),
    watchBodyData()
  ])
}
