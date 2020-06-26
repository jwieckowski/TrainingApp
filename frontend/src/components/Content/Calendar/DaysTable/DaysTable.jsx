import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  day: {
    backgroundColor: theme.palette.secondary.main
  }
}))

const checkCurrentDate = (day, date) => date.month === date.actualMonth && date.year === date.actualYear && day === date.actualDay

const monthDays = (index, firstDayInMonth, daysInMonth) => index >= firstDayInMonth && index - firstDayInMonth < daysInMonth

const getDay = (day, firstDayInMonth, daysInMonth, daysInPrevMonth) => {
  return day >= firstDayInMonth && day < daysInMonth + firstDayInMonth
    ? day + 1 - firstDayInMonth
    : day >= daysInMonth + firstDayInMonth
      ? day - firstDayInMonth - daysInMonth + 1
      : daysInPrevMonth + day - firstDayInMonth + 1
}

const getWeeksInMonth = (daysInMonth, firstDayInMonth) => Math.ceil((firstDayInMonth + daysInMonth) / 7)

function DaysTable ({ daysInMonth, daysInPrevMonth, firstDayInMonth, actualDate }) {
  const classes = useStyles()

  const createDays = (day, index) => {
    return (
      <TableCell align='center'>
        <Paper
          elevation={monthDays(index, firstDayInMonth, daysInMonth) ? 6 : 1}
          className={checkCurrentDate(day, actualDate) && classes.day}
        >
          {day}
        </Paper>
      </TableCell>
    )
  }

  const createRows = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const weeks = ['one', 'two', 'three', 'four', 'five', 'six']
    const weeksInMonth = getWeeksInMonth(daysInMonth, firstDayInMonth)
    return (
      weeks.map((w, wIndex) => {
        return (
          <TableRow key={wIndex}>
            {days.map((d, dIndex) => createDays(getDay(wIndex * 7 + dIndex, firstDayInMonth, daysInMonth, daysInPrevMonth), wIndex * 7 + dIndex))}
          </TableRow>
        )
      }).filter((value, index) => index < weeksInMonth)
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableBody>
          {createRows()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DaysTable
