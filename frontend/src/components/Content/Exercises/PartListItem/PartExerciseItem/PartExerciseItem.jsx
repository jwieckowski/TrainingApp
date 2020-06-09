import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { refreshExercises } from '@data/actions/exercisesActions.js'
import { addFavoriteExercises, removeFavoriteExercises } from '@data/actions/favoriteExercisesActions.js'
import { addExerciseRoutineList, removeExerciseRoutineList} from '@data/actions/routinesActions.js'

import AddIcon from '@material-ui/icons/Add'
import CheckIcon from '@material-ui/icons/Check'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles((theme) => ({
  exercisesList: {
    width: '100%'
  },
  exercises: {
    width: '100%',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  text: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  },
  starIcon: {
    color: theme.palette.secondary.main
  },
  starHidden: {
    display: 'none'
  }
}))

const PartExerciseItem = ({ exercises, partExercise, clickedItem, handleClickItem }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { routines, routineID, creatingRoutine } = useSelector(state => state.routines)
  const inRoutine = () => routines.filter(routine => routine._id === routineID)[0].exercises.includes(partExercise._id)
  const [exerciseAdded, setExerciseAdded] = useState(creatingRoutine ? inRoutine() : false)

  const handleAddClick = (e, id) => {
    e.stopPropagation()
    exerciseAdded ? dispatch(removeExerciseRoutineList(id)) : dispatch(addExerciseRoutineList(id))
    setExerciseAdded(prevState => !prevState)
  }

  const dispatchClickFavorite = (e, favorite, id) => {
    e.stopPropagation()
    favorite
      ? dispatch(removeFavoriteExercises(id))
      : dispatch(addFavoriteExercises(id))
    dispatch(refreshExercises())
  }

  return (
    <ListItem
      key={partExercise._id}
      className={classes.exercisesList}
      onClick={(e) => handleClickItem(e, partExercise._id)}
    >
      <Paper
        className={classes.exercises}
        elevation={clickedItem === partExercise._id ? 4 : 1}
      >
        <div className={classes.text}>
          <Typography>
            {exercises.indexOf(partExercise) + 1}.
          </Typography>
          <Typography>
            {partExercise.name}
          </Typography>
        </div>
        <div>
          {
            creatingRoutine &&
              <IconButton
                onClick={(e) => handleAddClick(e, partExercise._id)}
              >
                {exerciseAdded || inRoutine() ? <CheckIcon fontSize='large' /> : <AddIcon fontSize='large' />}
              </IconButton>
          }
          <IconButton
            className={classes.starIcon}
            onClick={(e) => dispatchClickFavorite(e, partExercise.favorite, partExercise._id)}
          >
            {partExercise.favorite ? <StarIcon fontSize='large' /> : <StarBorderIcon fontSize='large' />}
          </IconButton>
        </div>
      </Paper>
    </ListItem>
  )
}

export default PartExerciseItem
