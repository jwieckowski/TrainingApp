import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

// import Spinner from '../../UI/Spinner'
// import Page404 from '../../UI/Page404'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '40%',
    minHeight: '40%',
    display: 'flex',
    justifyContent: 'center'
  }
}))

const StatisticsTable = () => {
  const classes = useStyles()
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

  function createData (name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ]

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align='right'>Calories</TableCell>
              <TableCell align='right'>Fat&nbsp;(g)</TableCell>
              <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
              <TableCell align='right'>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}
export default StatisticsTable
