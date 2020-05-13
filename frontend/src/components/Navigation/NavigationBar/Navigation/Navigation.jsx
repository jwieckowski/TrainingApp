import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Header from '../Header'
import BottomMenu from '../BottomMenu'

const useStyles = makeStyles(theme => ({
  navigation: {
    zIndex: 100
  }
}))

const Navigation = (props) => {
  const classes = useStyles()
  return (
    <Grid
      item xs={12}
      className={classes.navigation}
    >
      {props.position === 'top' ? <Header /> : <BottomMenu />}
    </Grid>
  )
}

export default Navigation
