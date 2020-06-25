import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import { addTrainingSeries, startTraining } from '@data/actions/trainingActions.js'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import TrainingHistory from './TrainingHistory'
import TrainingForm from './TrainingForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    maxWidth: '800px',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    margin: 0
  },
  paper: {
    width: '100%',
    height: '100%'
  },
  list: {
    width: '100%',
    height: '8%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  history: {
    width: '100%',
    height: '40%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    height: '52%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const initialForm = {
  weightReps: []
}

const TrainingContent = ({ trainingExercises }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { trainingActive } = useSelector(state => state.training)

  const [form, setForm] = useState(initialForm)
  const [activeIndex, setActiveIndex] = useState(0)

  function addSeries (seriesForm) {
    setForm({ ...form, weightReps: [...form.weightReps, [seriesForm.weight, seriesForm.reps]] })
    !trainingActive && dispatch(startTraining())
    dispatch(addTrainingSeries(seriesForm.weight, seriesForm.reps, activeIndex))
  }

  function handleClick (event, seriesForm) {
    event.stopPropagation()
    seriesForm.weight !== 0 && seriesForm.reps !== 0
      ? addSeries(seriesForm)
      : console.log('snackbar nie wypełniono pól')
  }

  function handleExerciseClick (type) {
    if (!trainingExercises) return
    let index = activeIndex
    type === 1
      ? index = activeIndex === 0
        ? trainingExercises.length - 1
        : index - 1
      : index = index === trainingExercises.length - 1
        ? 0
        : index + 1
    setActiveIndex(index)
  }

  return (
    <Grid className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Box className={classes.list}>
          <IconButton onClick={() => handleExerciseClick(1)}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant='h5'>
            {trainingExercises && trainingExercises.length !== 0 && trainingExercises[activeIndex].name}
          </Typography>
          <IconButton onClick={() => handleExerciseClick(2)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box className={classes.history}>
          <TrainingHistory
            form={form}
            part={trainingExercises && trainingExercises.length !== 0 && trainingExercises[activeIndex].type}
            activeIndex={activeIndex}
          />
        </Box>
        <Box className={classes.form}>
          <TrainingForm
            handleClick={handleClick}
            activeIndex={activeIndex}
          />
        </Box>
      </Paper>
    </Grid>
  )
}

export default TrainingContent
