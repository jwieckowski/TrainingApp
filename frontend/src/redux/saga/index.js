import { all } from 'redux-saga/effects'
import { watchDB } from '@data/sagas/db'

// Here should be added future sagas watchers
export default function * rootSaga () {
  yield all([
    watchDB()
  ])
}
