import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

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
  }
}))

const History = () => {
  const classes = useStyles()

  // let content = <Spinner />
  // if (!loadingExercises) {
  //   if (!loadError) {
  //     content = (
  //       <>
  //         Historia
  //       </>
  //     )
  //   } else {
  //     content = <Page404 />
  //   }
  // }

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <HistoryBar className={classes.bar} />
      <HistoryContent />
    </Grid>
  )
}
export default History
