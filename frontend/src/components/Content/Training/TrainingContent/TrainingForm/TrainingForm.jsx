import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  row: {
    width: '80%',
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    width: '20%'
  }
}))

const seriesInitialForm = {
  weight: 0,
  reps: 0
}
const TrainingForm = ({ handleClick, activeIndex }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { activeExercises, trainingSeries, historyTrainings } = useSelector(state => state.training)
  const { routines, routineID } = useSelector(state => state.routines)
  const [seriesForm, setSeriesForm] = useState(seriesInitialForm)

  const getLastSeriesValue = (index) => trainingSeries[activeExercises.indexOf(activeIndex)][trainingSeries[activeExercises.indexOf(activeIndex)].length - 1][index]
  const getLastHistoricSeriesValue = () => historyTrainings && routines && historyTrainings.filter(training => training.name === getActiveRoutine().routine)
  const getActiveRoutine = () => routines.filter(routine => routine._id === routineID)[0]

  useEffect(() => {
    activeExercises.indexOf(activeIndex) === -1
      ? setSeriesForm({
        ...seriesForm,
        weight: getLastHistoricSeriesValue()[0] !== undefined && getLastHistoricSeriesValue()[0].trainingSeries[activeIndex][0][0],
        reps: getLastHistoricSeriesValue()[0] !== undefined && getLastHistoricSeriesValue()[0].trainingSeries[activeIndex][0][1]
      })
      : setSeriesForm({
        ...seriesForm,
        weight: getLastSeriesValue(0),
        reps: getLastSeriesValue(1)
      })
  }, [trainingSeries, activeIndex, historyTrainings])

  function handleChange (event) {
    setSeriesForm({ ...seriesForm, [event.target.name]: parseFloat(event.target.value) })
  }

  function increaseValue (number) {
    number === 1
      ? setSeriesForm({ ...seriesForm, weight: parseFloat(seriesForm.weight) + 0.5 })
      : setSeriesForm({ ...seriesForm, reps: parseFloat(seriesForm.reps) + 1 })
  }

  function decreaseValue (number) {
    number === 1
      ? seriesForm.weight !== 0 && setSeriesForm({ ...seriesForm, weight: parseFloat(seriesForm.weight) - 0.5 })
      : seriesForm.reps !== 0 && setSeriesForm({ ...seriesForm, reps: parseFloat(seriesForm.reps) - 1 })
  }

  return (
    <Grid className={classes.root}>
      <Box className={classes.row}>
        <IconButton onClick={() => decreaseValue(1)}>
          <RemoveCircleIcon fontSize='large' />
        </IconButton>
        <TextField
          required
          name='weight'
          label={`${t('training:weight')}`}
          value={seriesForm.weight}
          type='Number'
          InputProps={{ inputProps: { min: 1 } }}
          variant='outlined'
          onChange={(e) => handleChange(e)}
        />
        <IconButton onClick={() => increaseValue(1)}>
          <AddCircleIcon fontSize='large' />
        </IconButton>
      </Box>
      <Box className={classes.row}>
        <IconButton onClick={() => decreaseValue(2)}>
          <RemoveCircleIcon fontSize='large' />
        </IconButton>
        <TextField
          required
          name='reps'
          label={`${t('training:reps')}`}
          value={seriesForm.reps}
          type='Number'
          InputProps={{ inputProps: { min: 1 } }}
          variant='outlined'
          onChange={(e) => handleChange(e)}
        />
        <IconButton onClick={() => increaseValue(2)}>
          <AddCircleIcon fontSize='large' />
        </IconButton>
      </Box>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={(e) => handleClick(e, seriesForm)}
      >
        {t('training:add-data')}
      </Button>
    </Grid>
  )
}

export default TrainingForm
