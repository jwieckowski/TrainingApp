import { combineReducers } from 'redux'

// This is the place for future reducers to combine them all
import routines from '@data/reducers/routines.js'
import body from '@data/reducers/body.js'
import exercises from '@data/reducers/exercises.js'
import favoriteExercises from '@data/reducers/favoriteExercises.js'
import training from '@data/reducers/training.js'
import calendar from '@data/reducers/calendar.js'

export default combineReducers({
  routines,
  body,
  exercises,
  favoriteExercises,
  training,
  calendar
})
