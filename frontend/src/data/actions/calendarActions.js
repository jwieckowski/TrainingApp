import actionTypes from '@constants/actionTypes'

export function openCalendar () {
  return {
    type: actionTypes.CALENDAR_OPEN_ACTION
  }
}

export function closeCalendar () {
  return {
    type: actionTypes.CALENDAR_CLOSE_ACTION
  }
}
