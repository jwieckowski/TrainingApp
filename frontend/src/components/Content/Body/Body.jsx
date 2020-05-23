import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BodyTable from './BodyTable'
import BodyForm from './BodyForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    height: '100%',
    maxHeight: '100%'
  }
}))

const Body = () => {
  const classes = useStyles()
  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <BodyTable />
      <BodyForm />
    </Grid>
  )
}
export default Body
