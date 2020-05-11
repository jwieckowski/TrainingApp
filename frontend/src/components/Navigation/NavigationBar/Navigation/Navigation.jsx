import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Header from '../Header'

const useStyles = makeStyles(theme => ({
  navigation: {
    zIndex: 100
  }
}))

const Navigation = () => {
  const classes = useStyles()
  return (
    <Grid
      item xs={12}
      className={classes.navigation}
    >
      <Header />
    </Grid>
  )
}

export default Navigation
