import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { loadExercises } from '@data/actions/exercisesActions.js'

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

const Statistics = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { exercises, loadingExercises, loadError } = useSelector(state => state.exercises)

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

  const [properties, setProperties] = useState(props)
  const [filters, setFilters] = useState(properties.map((prop, index) => [prop.items[0], index]))

  useEffect(() => { dispatch(loadExercises()) }, [])
  useEffect(() => {
    setProperties(properties.map((prop, index) => {
      prop.items = index === 2
        ? ['None', ...Object.keys(exercises)]
        : prop.items
      return prop
    }))
  }, [loadingExercises])

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
            filters={filters}
            exercises={exercises}
          />
          <StatisticTable />
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
