import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Exercise from './Exercise'
import RoutinesList from './RoutinesList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    height: '100%',
    maxHeight: '100%'
  }
}))

const Dashboard = () => {
  const classes = useStyles()
  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <Exercise />
      <RoutinesList />
    </Grid>
  )
}
export default Dashboard
