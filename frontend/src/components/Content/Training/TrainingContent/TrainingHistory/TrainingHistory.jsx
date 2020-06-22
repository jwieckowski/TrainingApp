import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import TrainingTable from './TrainingTable'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'row'
  },
  boxLeft: {
    width: '40%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxRight: {
    width: '60%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const TrainingHistory = ({ form, part, activeIndex }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Box className={classes.boxLeft}>
        <Typography variant='h4'>
          {part}
        </Typography>
      </Box>
      <Box className={classes.boxRight}>
        <TrainingTable form={form} activeIndex={activeIndex} />
      </Box>
    </Grid>
  )
}

export default TrainingHistory
