import { combineReducers } from 'redux'

// This is the place for future reducers to combine them all
import routines from '@data/reducers/routines.js'
import body from '@data/reducers/body.js'

export default combineReducers({
  routines,
  body
})
