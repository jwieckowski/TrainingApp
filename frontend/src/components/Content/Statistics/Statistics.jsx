import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { loadExercises } from '@data/actions/exercisesActions.js'
import { loadTrainings } from '@data/actions/trainingActions.js'

import FilterBar from './FilterBar'
import StatisticChart from './StatisticsChart'
import StatisticTable from './StatisticsTable'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxHeight: '100%'
  }
}))

const getTimePeriodTrainings = (trainings, days) => {
  const oneDay = 1000 * 60 * 60 * 24
  return trainings.filter(training => (Math.abs(new Date() - new Date(training.date)) / oneDay) <= days)
}
const calculateTrainingWeight = (training) => training.map(tr => tr.map(series => parseInt(series[0] * series[1])).reduce((total, s) => total + s)).reduce((total, sum) => total + sum)
const calculateTrainingReps = (training) => training.map(tr => tr.map(series => parseInt(series[1])).reduce((total, s) => total + s)).reduce((total, sum) => total + sum)
const getPartExercisesSeries = (training, exercises, part, partExercise) => {
  const exercisePartIDs = part !== 'None' ? exercises[part].map(exercise => exercise._id) : []
  return part !== 'None'
    ? partExercise === 'None'
      ? training.trainingSeries.filter((series, index) => exercisePartIDs.includes(training.routineExercises[training.activeExercises[index]]))
      : training.trainingSeries.filter((series, index) => exercisePartIDs.includes(training.routineExercises[training.activeExercises[index]]) && training.routineExercises[training.activeExercises[index]] === partExercise)
    : training.trainingSeries
}

const Statistics = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { exercises, loadingExercises, loadError } = useSelector(state => state.exercises)
  const { historyTrainings, loadingTrainings } = useSelector(state => state.training)

  const props = [
    {
      label: t('statistics:days'),
      items: [7, 14, 30, 90]
    },
    {
      label: t('statistics:type'),
      items: [t('statistics:weight'), t('statistics:reps')]
    },
    {
      label: t('statistics:part'),
      items: ['None', ...Object.keys(exercises)]
    },
    {
      label: t('statistics:exercise'),
      items: ['None']
    }
  ]

  const [filteredTrainings, setFilteredTrainings] = useState([])
  const [dataStat, setDataStat] = useState([])
  const [properties, setProperties] = useState(props)
  const [filters, setFilters] = useState(properties.map((prop, index) => [prop.items[0], index]))

  useEffect(() => { dispatch(loadExercises()) }, [])
  useEffect(() => { dispatch(loadTrainings()) }, [])

  useEffect(() => {
    historyTrainings.sort((a, b) => a._id - b._id)
  }, [loadingTrainings])

  useEffect(() => {
    setProperties(properties.map((prop, index) => {
      prop.items = index === 2
        ? ['None', ...Object.keys(exercises)]
        : prop.items
      return prop
    }))
  }, [loadingExercises])

  useEffect(() => {
    const timeData = getTimePeriodTrainings(historyTrainings, filters[0][0])
    setFilteredTrainings(timeData)
    const partData = timeData.map(t => getPartExercisesSeries(t, exercises, filters[2][0], filters[3][0]))
    setDataStat(partData.map(training => {
      return training.length !== 0
        ? filters[1][0] === 'Weight' ? calculateTrainingWeight(training) : calculateTrainingReps(training)
        : []
    }))
  }, [historyTrainings, filters])

  const handleChange = (event, index) => {
    if (index === 2 && event.target.value !== 'None') {
      setProperties(properties.map((prop, index) => {
        prop.items = index === 3
          ? ['None', ...exercises[event.target.value].map(exercise => [exercise._id, exercise.name])]
          : prop.items
        return prop
      }))
    }
    setFilters(filters.map((filter, ind) => ind === index ? [event.target.value, index] : filter))
  }

  let content = <Spinner />

  if (!loadingExercises) {
    if (!loadError) {
      content = (
        <Grid container maxwidth='xs' className={classes.root}>
          <FilterBar
            exercises={exercises}
            filters={filters}
            properties={properties}
            handleChange={handleChange}
          />
          <StatisticChart
            dataStat={dataStat}
          />
          <StatisticTable
            dataStat={dataStat}
            filteredTrainings={filteredTrainings}
          />
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
export default Statistics
