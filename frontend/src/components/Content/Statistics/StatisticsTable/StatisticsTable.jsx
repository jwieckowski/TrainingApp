import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '35%',
    minHeight: '35%',
    display: 'flex',
    justifyContent: 'center'
  }
}))

const formatDate = (date) => {
  const d = new Date(date)
  return d.getDate() + '.' + (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1)
}

const createHeadCells = (data) => {
  return data.map((d, index) => {
    return (
      <TableCell key={index} align='center'>{formatDate(d.date)}</TableCell>
    )
  })
}

const createRowCells = (data) => {
  return data.map((d, index) => {
    return (
      <TableCell key={index} align='center'>{d}</TableCell>
    )
  })
}

const prepareTable = (trainings, stats) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell align='center'>Date</TableCell>
          {createHeadCells(trainings)}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow >
          <TableCell align='center'></TableCell>
          {createRowCells(stats)}
        </TableRow>
      </TableBody>
    </>
  )
}

const prepareMultiRowTable = (size, trainings, stats) => {
  const rows = ['1', '2', '3', '4', '5', '6']
  const rowsAmount = Math.ceil(stats.length / size)
  const filteredRows = rows.filter((r, index) => index < rowsAmount)
  return filteredRows.map((r, index) => prepareTable(trainings.filter((tr, ind) => ind >= (index * size) && ind < size * (index + 1)), stats.filter((st, ind) => ind >= (index * size) && ind < size * (index + 1))))
}

const StatisticsTable = ({ dataStat, filteredTrainings }) => {
  const classes = useStyles()
  const COLUMNS_AMOUNT = 15
  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='statistics table'>
          {
            dataStat.length > COLUMNS_AMOUNT
              ? prepareMultiRowTable(COLUMNS_AMOUNT, filteredTrainings, dataStat)
              : prepareTable(filteredTrainings, dataStat)
          }
        </Table>
      </TableContainer>
    </Grid>
  )
}
export default StatisticsTable
