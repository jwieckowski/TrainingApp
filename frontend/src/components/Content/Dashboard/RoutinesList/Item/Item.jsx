import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { removeRoutine, createRoutineList, chooseActiveRoutine } from '@data/actions/routinesActions.js'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  const { removeError } = useSelector(state => state.routines)

  useEffect(() => {
    removeError &&
    enqueueSnackbar(t('dashboard:remove-fail'), {
      variant: 'error'
    })
  }, [removeError])

  const handleListClick = (e, id) => {
    e.stopPropagation()
    dispatch(createRoutineList(id))
    history.push('/exercises')
  }

  const handleStartClick = (e, id) => {
    e.stopPropagation()
    dispatch(chooseActiveRoutine(id))
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
              onClick={(e) => handleStartClick(e, id)}
            >
              <PlayCircleFilledIcon />
            </IconButton>
        }
        <ListItemText
          primary={
            <Typography variant='h4'>
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
