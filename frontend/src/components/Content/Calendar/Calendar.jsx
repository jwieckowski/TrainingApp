import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { DialogContentText, Typography, Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import DaysTable from './DaysTable'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    height: '50%',
    backgroundColor: 'blue'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()

const getFirstDayInMonth = (month, year) => {
  return new Date(year, month, 1).getDay() === 0
    ? 6
    : new Date(year, month, 1).getDay() - 1
}

const initialDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  actualYear: new Date().getFullYear(),
  actualMonth: new Date().getMonth(),
  actualDay: new Date().getDate()
}

const Calendar = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const [date, setDate] = useState(initialDate)
  const open = true

  const months = [t('calendar:jan'), t('calendar:feb'), t('calendar:mar'), t('calendar:apr'), t('calendar:may'), t('calendar:jun'), t('calendar:jul'), t('calendar:aug'), t('calendar:sep'), t('calendar:oct'), t('calendar:nov'), t('calendar:dec')]

  const handleClick = (type) => {
    type === 1
      ? date.month !== 0
        ? setDate({ ...date, month: date.month - 1 })
        : setDate({ ...date, year: date.year - 1, month: 11 })
      : date.month !== 11
        ? setDate({ ...date, month: date.month + 1 })
        : setDate({ ...date, year: date.year + 1, month: 0 })
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth='md'
      open={open}
    >
      <DialogTitle>
        <Typography>
          {t('calendar:title')}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box className={classes.nav}>
          <IconButton onClick={() => handleClick(1)}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography>
            {months[date.month] + ' ' + date.year}
          </Typography>
          <IconButton onClick={() => handleClick(2)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <DialogContentText>
          <DaysTable
            daysInMonth={getDaysInMonth(date.month, date.year)}
            daysInPrevMonth={date.month !== 0 ? getDaysInMonth(date.month - 1, date.year) : getDaysInMonth(11, date.year - 1)}
            firstDayInMonth={getFirstDayInMonth(date.month, date.year)}
            actualDate={date}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='primary'>
          {t('calendar:close')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Calendar
