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

const Exercises = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()

  const [clickedPart, setClickedPart] = useState(undefined)
  const { exercises, loadingExercises, loadError } = useSelector(state => state.exercises)
  const { routines, routineID, creatingRoutine } = useSelector(state => state.routines)


  let content = <Spinner />

  if (!loadingExercises) {
    if (!loadError) {
      content = (
        <>
          <Typography>
            Training
          </Typography>
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
