import actionTypes from '@constants/actionTypes'

const initialState = {
  open: false
}

const openCalendar = (state, action) => {
  return {
    ...state,
    open: true
  }
}

const closeCalendar = (state, action) => {
  return {
    ...state,
    open: false
  }
}

export default function calendar (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CALENDAR_OPEN_ACTION:
      return openCalendar(state, action)
    case actionTypes.CALENDAR_CLOSE_ACTION:
      return closeCalendar(state, action)
    default:
      return state
  }
}
