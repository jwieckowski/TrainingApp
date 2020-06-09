/* globals describe, test, expect */

import reducer from '../body.js'
import actionTypes from '@constants/actionTypes'
import * as actions from '../../actions/bodyActions.js'

describe('body data reducer', () => {
  const initialState = {
    bodyData: [],
    loadingBodyData: false,
    loadError: undefined,
    addError: undefined,
    removeError: undefined,
    clickedItem: undefined
  }

  const testBodyData = [
    {
      _id: 1,
      weight: 80,
      bmi: 20,
      fat: 10,
      muscle: 55
    },
    {
      _id: 2,
      weight: 81,
      bmi: 21,
      fat: 11,
      muscle: 56
    },
    {
      _id: 3,
      weight: 822,
      bmi: 22,
      fat: 11,
      muscle: 57
    }
  ]

  const testBody = {
    _id: 4,
    weight: 80,
    bmi: 20,
    fat: 10,
    muscle: 55
  }

  const testBodyUpdate = {
    _id: 3,
    weight: 80,
    bmi: 20,
    fat: 10,
    muscle: 55
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.loadBodyData())).toEqual(initialState)
  })

  test(`should handle ${actionTypes.BODY_DATA_LOAD_START}`, () => {
    expect(reducer(initialState, actions.loadBodyDataStart())).toEqual({
      ...initialState,
      loadingBodyData: true,
      loadError: undefined
    })
  })

  test(`should handle ${actionTypes.BODY_DATA_LOAD_SUCCESS}`, () => {
    expect(reducer(initialState, actions.loadBodyDataSuccess(testBodyData))).toEqual({
      ...initialState,
      bodyData: testBodyData,
      loadingBodyData: false
    })
  })

  test(`should handle ${actionTypes.BODY_DATA_LOAD_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.loadBodyDataFail(testError))).toEqual({
      ...initialState,
      loadingBodyData: false,
      loadError: testError
    })
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.addBodyData(testBody))).toEqual(initialState)
  })

  test(`should handle ${actionTypes.BODY_DATA_ADD_START}`, () => {
    expect(reducer(initialState, actions.addBodyDataStart())).toEqual({
      ...initialState,
      addError: undefined
    })
  })

  test(`should handle ${actionTypes.BODY_DATA_ADD_SUCCESS}`, () => {
    expect(reducer(initialState, actions.addBodyDataSuccess(testBody))).toEqual({
      ...initialState,
      bodyData: [testBody, ...initialState.bodyData]
    })
  })

  test(`should handle ${actionTypes.BODY_DATA_LOAD_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.loadBodyDataFail(testError))).toEqual({
      ...initialState,
      loadError: testError
    })
  })

  test('should return the initial state when action is not handled by the reducer', () => {
    expect(reducer(initialState, actions.updateBodyData(testBodyUpdate))).toEqual(initialState)
  })

  test(`should handle ${actionTypes.BODY_DATA_UPDATE_START}`, () => {
    expect(reducer(initialState, actions.updateBodyDataStart())).toEqual({
      ...initialState,
      addError: undefined
    })
  })

  test(`should handle ${actionTypes.BODY_DATA_UPDATE_SUCCESS}`, () => {
    expect(reducer(initialState, actions.updateBodyDataSuccess(testBodyUpdate))).toEqual({
      ...initialState,
      bodyData: [...initialState.bodyData.map(b => {
        b = testBodyUpdate._id === b._id ? testBodyUpdate : b
        return b
      })],
      clickedItem: undefined
    })
  })

  test(`should handle ${actionTypes.BODY_DATA_UPDATE_FAIL}`, () => {
    const testError = 'Error'

    expect(reducer(initialState, actions.updateBodyDataFail(testError))).toEqual({
      ...initialState,
      addError: testError,
      clickedItem: undefined
    })
  })
})
