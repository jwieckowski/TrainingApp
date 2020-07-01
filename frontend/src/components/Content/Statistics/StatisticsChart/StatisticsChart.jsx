import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { loadTrainings } from '@data/actions/trainingActions.js'
import { filterChartData } from './filterChartData.js'

import { Grid } from '@material-ui/core'
import { Chart } from 'react-charts'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '55%',
    minHeight: '55%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chart: {
    width: '95%',
    height: '95%'
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

const StatisticsChart = ({ filters, exercises }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [chartData, setChartData] = useState({ label: '', data: [] })
  const { historyTrainings, loadingTrainings } = useSelector(state => state.training)

  useEffect(() => {
    dispatch(loadTrainings())
  }, [])

  useEffect(() => {
    historyTrainings.sort((a, b) => a._id - b._id)
  }, [loadingTrainings])

  useEffect(() => {
    const timeData = getTimePeriodTrainings(historyTrainings, filters[0][0])
    const partData = timeData.map(t => getPartExercisesSeries(t, exercises, filters[2][0], filters[3][0]))
    const data = partData.map(training => {
      return training.length !== 0
        ? filters[1][0] === 'Weight' ? calculateTrainingWeight(training) : calculateTrainingReps(training)
        : []
    })

    setChartData({
      label: 'Weight',
      data: data.map((d, index) => [index, d])
    })
  }, [historyTrainings, filters])

  const data = React.useMemo(
    () => [chartData],
    [historyTrainings, chartData]
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    [historyTrainings, chartData]
  )

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    [historyTrainings, chartData]
  )

  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    [historyTrainings, chartData]
  )

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <Grid className={classes.chart}>
        <Chart
          data={data}
          axes={axes}
          getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle}
        />
      </Grid>
    </Grid>
  )
}
export default StatisticsChart
