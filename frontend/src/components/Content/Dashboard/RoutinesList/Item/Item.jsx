import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { removeRoutine, createRoutineList } from '@data/actions/routinesActions.js'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import ListIcon from '@material-ui/icons/List'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
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
  listIcon: {
    margin: 0,
    padding: 0,
    '&:hover': {
      cursor: 'pointer'
    }
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

const Item = ({ routines, id, name, label, clickedItem, handleClickedItem }) => {
  const dispatch = useDispatch()
  const clicked = id === clickedItem
  const classes = useStyles({ clicked })
  const history = useHistory()

  const handleListClick = (e, id) => {
    e.stopPropagation()
    dispatch(createRoutineList(id))
    history.push('/exercises')
  }

  const handleStartClick = (e) => {
    e.stopPropagation()
    history.push('/training')
  }

  const canStartTraining = () => routines.filter(routine => routine._id === id)[0].exercises.length > 0

  return (
    <ListItem onClick={(e) => handleClickedItem(e, id)}>
      <Paper
        className={classes.paper}
        elevation={clicked ? 4 : 1}
      >
        {
          canStartTraining() &&
            <IconButton
              className={classes.listIcon}
              onClick={(e) => handleStartClick(e)}
            >
              <PlayCircleFilledIcon />
            </IconButton>
        }
        <ListItemText
          primary={
            <Typography>
              {name}
            </Typography>
          }
        />
        <IconButton
          className={classes.listIcon}
          onClick={(e) => handleListClick(e, id)}
        >
          <ListIcon />
        </IconButton>
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
