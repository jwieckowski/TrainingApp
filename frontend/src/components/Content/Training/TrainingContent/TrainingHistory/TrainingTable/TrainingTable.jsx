import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'

import { loadTrainings } from '@data/actions/trainingActions.js'

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

const formatDate = (date) => {
  const d = new Date(date)
  return d.getDate() + '.' + (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1)
}
const formatTraining = (date, training) => training && training.length !== 0 && formatDate(date) + ', ' + training.map(series => series.join('x')).join(', ')

const TrainingTable = ({ form, activeIndex }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [trainingResults, setTrainingResults] = useState(undefined)
  const { date, activeExercises, trainingSeries, historyTrainings } = useSelector(state => state.training)

  useEffect(() => {
    dispatch(loadTrainings())
  }, [])

  useEffect(() => {
    trainingResults === undefined
      ? setTrainingResults(historyTrainings.filter((value, index) => index < 7))
      : setTrainingResults(
        trainingResults.filter(training => training.date === date).length === 0
          ? [{ date, activeExercises, trainingSeries }, ...historyTrainings]
          : [...trainingResults.map(training => {
            training = training.date === date
              ? { date, activeExercises, trainingSeries }
              : training
            return training
          })].filter((value, index) => index < 7)
      )
    activeExercises.length === 0 && setTrainingResults(historyTrainings.filter((value, index) => index < 7))
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
    <Box className={classes.table}>
      {trainingResults !== undefined && trainingResults.map(training => createData(training.date, training.trainingSeries[training.activeExercises.indexOf(activeIndex)]))}
    </Box>
  )
}

export default TrainingTable
