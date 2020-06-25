import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10%',
    maxHeight: '10%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  bar: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export default function HistoryBar ({ training, handleClick }) {
  const classes = useStyles()

  const formatDate = (date) => {
    const d = new Date(date)
    return d.getDate() + '.' + (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1)
  }

  return (
    <Box
      className={classes.root}
    >
      <Box className={classes.bar}>
        <IconButton onClick={() => handleClick(1)}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box className={classes.title}>
          <Typography variant='h5'>
            {training && training.routine}
          </Typography>
          <Typography variant='h6'>
            {training && formatDate(training.date)}
          </Typography>
        </Box>
        <IconButton onClick={() => handleClick(2)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
