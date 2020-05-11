import { combineReducers } from 'redux'

// This is the place for future reducers to combine them all
import dbInteraction from '@data/reducers/dbInteraction.js'

export default combineReducers({
  dbInteraction
})
