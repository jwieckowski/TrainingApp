/* globals describe, test, expect */

import reducer from '../favoriteExercises.js'
import actionTypes from '@constants/actionTypes'
import * as actions from '../../actions/favoriteExercisesActions.js'

describe('favorite exercises reducer', () => {
  const initialState = {
    favoriteExercises: [],
    loadingFavoriteExercises: false,
    loadError: undefined,
    addError: undefined,
    removeError: undefined
  }

  const testFavoriteExercises = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]

  const testAddFavorite = {
    id: 4
  }

  const testRemoveFavorite = {
    id: 3
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.loadFavoriteExercises())).toEqual(initialState)
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_LOAD_START}`, () => {
    expect(reducer(initialState, actions.loadFavoriteExercisesStart())).toEqual({
      ...initialState,
      loadingFavoriteExercises: true,
      loadError: undefined
    })
  })

  test.skip(`should handle ${actionTypes.FAVORITE_EXERCISES_LOAD_SUCCESS}`, () => {
    expect(reducer(initialState, actions.loadFavoriteExercisesSuccess(testFavoriteExercises))).toEqual({
      ...initialState,
      favoriteExercises: testFavoriteExercises,
      loadingFavoriteExercises: false
    })
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_LOAD_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.loadFavoriteExercisesFail(testError))).toEqual({
      ...initialState,
      loadingFavoriteExercises: false,
      loadError: testError
    })
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.addFavoriteExercises(testAddFavorite))).toEqual(initialState)
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_ADD_START}`, () => {
    expect(reducer(initialState, actions.addFavoriteExercisesStart())).toEqual({
      ...initialState,
      addError: undefined
    })
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_ADD_SUCCESS}`, () => {
    expect(reducer(initialState, actions.addFavoriteExercisesSuccess(testAddFavorite))).toEqual({
      ...initialState,
      favoriteExercises: [...initialState.favoriteExercises, testAddFavorite]
    })
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_ADD_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.addFavoriteExercisesFail(testError))).toEqual({
      ...initialState,
      addError: testError
    })
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.removeFavoriteExercises(testRemoveFavorite))).toEqual(initialState)
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_REMOVE_START}`, () => {
    expect(reducer(initialState, actions.removeFavoriteExercisesStart())).toEqual({
      ...initialState,
      removeError: undefined
    })
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_REMOVE_SUCCESS}`, () => {
    expect(reducer(initialState, actions.removeFavoriteExercisesSuccess(testRemoveFavorite))).toEqual({
      ...initialState,
      favoriteExercises: [...initialState.favoriteExercises.filter(f => f.id !== testRemoveFavorite.id)]
    })
  })

  test(`should handle ${actionTypes.FAVORITE_EXERCISES_REMOVE_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.removeFavoriteExercisesFail(testError))).toEqual({
      ...initialState,
      removeError: testError
    })
  })
})
