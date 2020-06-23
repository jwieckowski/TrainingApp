import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import { loadExercises } from '@data/actions/exercisesActions.js'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

import Grid from '@material-ui/core/Grid'
import InfoBar from './InfoBar'
import TrainingContent from './TrainingContent'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
    maxHeight: '100%',
    margin: 0
  },
  infoBar: {
    width: '100%',
    height: '10%',
    maxHeight: '10%'
  },
  rest: {
    width: '100%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Exercises = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()

  const [trainingExercises, setTrainingExercises] = useState(undefined)
  const { exercises, loadingExercises, loadError } = useSelector(state => state.exercises)
  const { routines, routineID, loadingRoutines } = useSelector(state => state.routines)

  useEffect(() => {
    dispatch(loadExercises())
  }, [])

  useEffect(() => {
    if (!loadingRoutines && !loadingExercises && routineID) {
      const activeRoutine = routines.filter(routine => routine._id === routineID)[0]
      const trainingExercises = Object.values(exercises).map(part => part.filter(e => activeRoutine.exercises.includes(e._id))).flat()
      setTrainingExercises(trainingExercises)
    }
  }, [loadingRoutines, loadingExercises])

  let content = <Spinner />

  if (!loadingExercises) {
    if (!loadError) {
      content = (
        <Grid className={classes.root}>
          <InfoBar className={classes.infoBar} />
          <Grid className={classes.rest}>
            <TrainingContent trainingExercises={trainingExercises} />
          </Grid>
        </Grid>
      )
    } else {
      content = <Page404 />
    }
  }

  return (
    <>
      {content}
    </>
  )
}

export default Exercises
