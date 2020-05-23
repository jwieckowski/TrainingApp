import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { clickedItemBodyData } from '@data/actions/bodyActions.js'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  row: {
    position: 'relative'
  },
  column: {
    // minWidth: '100px',
    width: '12.5vw'
  },
  edit: props => ({
    display: props.clicked ? 'block' : 'none',
    position: 'fixed',
    right: '25'
  })
}))

// TODO: think about switch in solution, same size of columns

const Item = ({ data, clickedItem, handleClick }) => {
  const clicked = data._id === clickedItem
  const classes = useStyles({ clicked })
  const dispatch = useDispatch()

  return (
    <TableRow
      hover
      key={data._id}
      className={classes.row}
      onClick={() => handleClick(data._id)}
    >
      <TableCell key={data._id} align='center' className={classes.column}>
        {data.weight}
      </TableCell>
      <TableCell key={data._id} align='center' className={classes.column}>
        {data.bmi}
      </TableCell>
      <TableCell key={data._id} align='center' className={classes.column}>
        {data.fat}
      </TableCell>
      <TableCell key={data._id} align='center' className={classes.column}>
        {data.muscle}
      </TableCell>
      <IconButton
        aria-label='edit'
        className={classes.edit}
        onClick={() => dispatch(clickedItemBodyData(data))}
      >
        <EditIcon />
      </IconButton>
    </TableRow>
  )
}

export default Item
