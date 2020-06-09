import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import StatisticChart from './StatisticsChart'
import StatisticTable from './StatisticsTable'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxHeight: '100%'
  }
}))

const Statistics = () => {
  const classes = useStyles()

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <StatisticChart />
      <StatisticTable />
    </Grid>
  )
}
export default Statistics
