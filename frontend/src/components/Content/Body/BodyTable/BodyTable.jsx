import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import Spinner from '../../../UI/Spinner'
import Page404 from '../../../UI/Page404'
import { loadBodyData } from '@data/actions/bodyActions.js'

import Item from './Item'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    minWidth: '350px',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '60%',
    maxHeight: '60%'
  },
  column: {
    // minWidth: '100px',
    width: '12.5vw'
  }
}))

// TODO: think about switch in solution, same size of columns
const createRows = (bodyData, clickedItem, handleClick) => {
  return bodyData.map(data => {
    return <Item key={data._id} data={data} clickedItem={clickedItem} handleClick={handleClick} />
  })
}

const BodyTable = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { bodyData, loadingBodyData, loadError } = useSelector(state => state.body)
  useEffect(() => { dispatch(loadBodyData()) }, [])

  const [clickedItem, setClickedItem] = useState(undefined)
  function handleClickItem (id) {
    setClickedItem(clickedItem === id ? undefined : id)
  }

  const columns = [t('body:weight'), t('body:bmi'), t('body:fat'), t('body:muscle')]
  let content = <Spinner />

  if (!loadingBodyData) {
    if (!loadError) {
      content = (
        <Paper className={classes.root} elevation={3}>
          <TableContainer>
            <Table stickyHeader aria-label='body data table'>
              <TableHead>
                <TableRow>
                  {columns.map((label) => (
                    <TableCell
                      key={label}
                      align='center'
                      className={classes.column}
                    >
                      {label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {createRows(bodyData, clickedItem, handleClickItem)}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )
    } else {
      content = <Page404 />
    }
  }

  return (
    <>
      {content}
    </>
  )
}

export default BodyTable
