import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { loadExercises } from '@data/actions/exercisesActions.js'
import { saveExerciseRoutineList } from '@data/actions/routinesActions.js'
import { useTranslation } from 'react-i18next'
import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PartListItem from './PartListItem'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
    maxHeight: '100%'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  routineName: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const displayPartListItems = (exercises, clickedPart, handlePartClick) => {
  return Object.keys(exercises).map(k => {
    return (
      <PartListItem
        key={k}
        part={k}
        partExercise={exercises[k]}
        clickedPart={clickedPart}
        handlePartClick={handlePartClick}
      />
    )
  })
}

const Exercises = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()

  const [clickedPart, setClickedPart] = useState(undefined)
  const { exercises, loadingExercises, loadError } = useSelector(state => state.exercises)
  const { routines, routineID, creatingRoutine } = useSelector(state => state.routines)

  useEffect(() => { dispatch(loadExercises()) }, []) // warunek

  const handlePartClick = (key) => {
    setClickedPart(clickedPart === key ? undefined : key)
  }

  const handleSubmitClick = () => {
    dispatch(saveExerciseRoutineList(routines.filter(routine => routine._id === routineID)[0]))
    history.push('/')
  }

  const getRoutineName = () => routines.map(routine => routine._id === routineID && routine.name)

  let content = <Spinner />

  if (!loadingExercises) {
    if (!loadError) {
      content = (
        <>
          <List className={classes.root}>
            {
              creatingRoutine &&
                <Box className={classes.routineName}>
                  <Typography variant='h4'>
                    {getRoutineName()}
                  </Typography>
                </Box>
            }
            {displayPartListItems(exercises, clickedPart, handlePartClick)}
            {
              creatingRoutine &&
                <Box className={classes.button}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => handleSubmitClick()}
                  >
                    {t('exercises:finish-create')}
                  </Button>
                </Box>
            }
          </List>
        </>
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

export default Exercises
