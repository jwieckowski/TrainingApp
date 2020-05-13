import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { removeRoutine } from '@data/actions/routinesActions.js'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  item: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  },
  close: props => ({
    margin: 0,
    padding: 0,
    display: props.clicked ? 'block' : 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  })
}))

const Item = ({ id, name, label, clickedItem, handleClickedItem }) => {
  const dispatch = useDispatch()
  const clicked = id === clickedItem
  const classes = useStyles({ clicked })

  return (
    <ListItem onClick={() => handleClickedItem(id)}>
      <Paper className={classes.paper}>
        <ListItemText
          primary={
            <Typography>
              {name}
            </Typography>
          }
        />
        <IconButton
          className={classes.close}
          onClick={() => dispatch(removeRoutine(id))}
        >
          <DeleteIcon />
        </IconButton>
      </Paper>
    </ListItem>
  )
}

export default Item
