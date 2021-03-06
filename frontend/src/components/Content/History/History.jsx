import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import { loadTrainings } from '@data/actions/trainingActions.js'
import { loadExercises } from '@data/actions/exercisesActions.js'
import { loadRecords } from '@data/actions/recordsActions.js'

import { Grid, Typography } from '@material-ui/core'
import HistoryBar from './HistoryBar'
import HistoryContent from './HistoryContent'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
    maxHeight: '100%'
  },
  bar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  label: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const History = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [activeIndex, setActiveIndex] = useState(0)
  const [trainingExercises, setTrainingExercises] = useState([])
  const { historyTrainings, loadingTrainings, loadError } = useSelector(state => state.training)
  const { exercises, loadingExercises } = useSelector(state => state.exercises)
  const { records, loadingRecords } = useSelector(state => state.records)

  useEffect(() => {
    dispatch(loadTrainings())
    dispatch(loadExercises())
    dispatch(loadRecords())
  }, [])

  useEffect(() => {
    if (exercises) {
      if (historyTrainings.length === 0) return
      const allExercises = Object.entries(exercises).map(part => part[1]).flat()
      setTrainingExercises(allExercises.filter(exercise => historyTrainings[activeIndex].routineExercises.includes(exercise._id)))
    }
  }, [loadingTrainings, loadingExercises, activeIndex])

  function handleClick (type) {
    type === 1
      ? activeIndex < historyTrainings.length - 1 && setActiveIndex(prev => prev + 1)
      : activeIndex > 0 && setActiveIndex(prev => prev - 1)
  }

  let content = <Spinner />
  if (!loadingTrainings && !loadingRecords) {
    if (!loadError) {
      content = (
        <Grid container maxwidth='xs' className={classes.root}>
          {historyTrainings.length !== 0
            ? <>
              <HistoryBar
                className={classes.bar}
                training={historyTrainings[activeIndex]}
                handleClick={handleClick}
              />
              <HistoryContent
                trainingExercises={trainingExercises}
                historyTraining={historyTrainings[activeIndex]}
                records={records}
              />
            </>
            : <Grid className={classes.label}>
              <Typography variant='h3'>
                {t('training:no-trainings')}
              </Typography>
            </Grid>
          }
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
export default History
