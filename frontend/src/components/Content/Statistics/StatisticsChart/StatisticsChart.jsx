import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

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

const StatisticsChart = ({ dataStat }) => {
  const classes = useStyles()
  const [chartData, setChartData] = useState({ label: '', data: [] })

  useEffect(() => {
    setChartData({
      label: 'Weight',
      data: dataStat.map((d, index) => [index, d])
    })
  }, [dataStat])

  const data = React.useMemo(
    () => [chartData],
    [chartData]
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    [chartData]
  )

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    [chartData]
  )

  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    [chartData]
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
