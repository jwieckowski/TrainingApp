import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import { Chart } from 'react-charts'

// import Spinner from '../../UI/Spinner'
// import Page404 from '../../UI/Page404'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '60%',
    minHeight: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chart: {
    width: '95%',
    height: '95%'
  }
}))

const StatisticsChart = () => {
  const classes = useStyles()

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  // const { bodyData, loadingStatistics, loadError } = useSelector(state => state.body)
  // useEffect(() => { dispatch(loadBodyData()) }, [])

  // let content = <Spinner />

  // if (!loadingTrainings) {
  //   if (!loadError) {
  //     content = (
  //       <Grid container maxwidth='xs'>
  //         statystyki
  //       </Grid>
  //     )
  //   } else {
  //     content = <Page404 />
  //   }
  // }

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <Grid className={classes.chart}>
        <Chart data={data} axes={axes} />
      </Grid>
    </Grid>
  )
}
export default StatisticsChart
