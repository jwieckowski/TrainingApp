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
  }
}))

export default function HistoryBar () {
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
    >
      <Box className={classes.bar}>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant='h5'>
          data
        </Typography>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
