import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  table: {
    width: '90%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  box: {
    width: '100%'
  }
})

let mockTraining = [
  {
    date: 24.06,
    activeExercises: [0, 1],
    trainingSeries: [[[90, 9], [90, 10], [90, 11], [90, 10]], [[30, 9], [30, 10], [30, 11], [30, 10]]]
  },
  {
    date: 22.06,
    activeExercises: [1, 0],
    trainingSeries: [[[90, 9], [90, 10], [90, 11], [90, 10]], [[30, 9], [30, 10], [30, 11], [30, 10]]]
  },
  {
    date: 21.06,
    activeExercises: [0, 1],
    trainingSeries: [[[90, 9], [90, 10], [90, 11], [90, 10]], [[30, 9], [30, 10], [30, 11], [30, 10]]]
  }
]

const formatTraining = (date, training) => training && training.length !== 0 && date + ', ' + training.map(series => series.join('x')).join(', ')

const TrainingTable = ({ form, activeIndex }) => {
  const classes = useStyles()

  const { date, activeExercises, trainingSeries } = useSelector(state => state.training)

  useEffect(() => {
    mockTraining = mockTraining.filter(training => training.date === date).length === 0
      ? [{ date, activeExercises, trainingSeries }, ...mockTraining]
      : [...mockTraining.map(training => {
        training = training.date === date
          ? { date, activeExercises, trainingSeries }
          : training
        return training
      })]
    mockTraining = mockTraining.filter((value, index) => index < 7)
  }, [trainingSeries, activeExercises, activeIndex])

  const createData = (date, training) => {
    return (
      <Box className={classes.box}>
        <Typography>
          {formatTraining(date, training)}
        </Typography>
        <Divider />
      </Box>
    )
  }

  return (
    // max 7 last trainings
    <Box className={classes.table}>
      {mockTraining.map(training => createData(training.date, training.trainingSeries[training.activeExercises.indexOf(activeIndex)]))}
    </Box>
  )
}

export default TrainingTable
