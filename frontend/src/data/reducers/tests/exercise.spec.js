/* globals describe, test, expect */

import reducer from '../exercises.js'
import actionTypes from '@constants/actionTypes'
import * as actions from '../../actions/exercisesActions.js'

describe('exercises reducer', () => {
  const initialState = {
    exercises: [],
    loadingExercises: false,
    loadError: undefined
  }

  const testExercises = {
    Chest: [
      {
        _id: 1,
        name: 'Barbell bench press',
        type: 'Chest'
      },
      {
        _id: 2,
        name: 'Dumbell bench press',
        type: 'Chest',
        favorite: true
      }
    ]
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.loadExercises())).toEqual(initialState)
  })

  test(`should handle ${actionTypes.EXERCISES_LOAD_ACTION}`, () => {
    expect(reducer(initialState, actions.loadExercisesStart())).toEqual({
      ...initialState,
      loadingExercises: true,
      loadError: undefined
    })
  })

  test(`should handle ${actionTypes.EXERCISES_LOAD_SUCCESS}`, () => {
    expect(reducer(initialState, actions.loadExercisesSuccess(testExercises))).toEqual({
      ...initialState,
      exercises: testExercises,
      loadingExercises: false
    })
  })

  test(`should handle ${actionTypes.EXERCISES_LOAD_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.loadExercisesFail(testError))).toEqual({
      ...initialState,
      loadingExercises: false,
      loadError: testError
    })
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.refreshExercises())).toEqual(initialState)
  })

  test(`should handle ${actionTypes.EXERCISES_REFRESH_ACTION}`, () => {
    expect(reducer(initialState, actions.refreshExercisesStart())).toEqual({
      ...initialState,
      refreshError: undefined
    })
  })

  test(`should handle ${actionTypes.EXERCISES_REFRESH_SUCCESS}`, () => {
    expect(reducer(initialState, actions.refreshExercisesSuccess(testExercises))).toEqual({
      ...initialState,
      exercises: testExercises
    })
  })

  test(`should handle ${actionTypes.EXERCISES_REFRESH_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.refreshExercisesFail(testError))).toEqual({
      ...initialState,
      refreshError: testError
    })
  })
})
