import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import { addTraining } from '@data/actions/trainingActions.js'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TimerIcon from '@material-ui/icons/Timer'
import StopIcon from '@material-ui/icons/Stop'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import EditIcon from '@material-ui/icons/Edit'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    height: '10%',
    margin: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabs: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const InfoBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [started, setStarted] = useState(false)
  const { date, trainingSeries, activeExercises } = useSelector(state => state.training)

  const handleClick = () => {
    setStarted(prev => !prev)
    dispatch(addTraining({ _id: 1, date, activeExercises, trainingSeries }))
  }

  return (
    <Grid className={classes.root}>
      <Box className={classes.tabs} onClick={handleClick}>
        <IconButton>
          {started ? <StopIcon fontSize='large' /> : <PlayArrowIcon fontSize='large' />}
        </IconButton>
        <Typography>
          {started ? t('training:end-training') : t('training:start-training')}
        </Typography>
      </Box>
      <Box className={classes.tabs}>
        <IconButton>
          <TimerIcon fontSize='large' />
        </IconButton>
        <Typography>
          {t('training:time-training')}
        </Typography>
      </Box>
      <Box className={classes.tabs}>
        <IconButton>
          <EditIcon fontSize='large' />
        </IconButton>
        <Typography>
          {t('training:edit-training')}
        </Typography>
      </Box>
    </Grid>
  )
}

export default InfoBar
