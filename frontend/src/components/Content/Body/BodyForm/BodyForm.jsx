import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { addBodyData, updateBodyData } from '@data/actions/bodyActions.js'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '40%',
    maxHeight: '40%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3)
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(3)
  },
  button: {
    width: '15%'
  }
}))

const BodyTable = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { bodyData, clickedItem } = useSelector(state => state.body)
  const [id, setID] = useState(bodyData.length + 1)
  const [form, setForm] = useState({})

  useEffect(() => {
    setID(bodyData.length + 1)
    setForm({
      weight: bodyData[0] === undefined ? 0 : clickedItem === undefined ? bodyData[0].weight : clickedItem.weight,
      bmi: bodyData[0] === undefined ? 0 : clickedItem === undefined ? bodyData[0].bmi : clickedItem.bmi,
      fat: bodyData[0] === undefined ? 0 : clickedItem === undefined ? bodyData[0].fat : clickedItem.fat,
      muscle: bodyData[0] === undefined ? 0 : clickedItem === undefined ? bodyData[0].muscle : clickedItem.muscle
    })
  }, [bodyData, clickedItem])

  function handleChange (event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  function handleSubmit () {
    const data = {
      _id: clickedItem === undefined ? id : clickedItem._id,
      date: new Date(),
      ...form
    }
    Object.entries(form).find(([key, value]) => value === undefined)
      ? console.log('snackbar')
      : clickedItem === undefined
        ? dispatch(addBodyData(data))
        : dispatch(updateBodyData(data))
  }

  return (
    <Paper className={classes.root}>
      <form className={classes.form}>
        <div className={classes.row}>
          <TextField
            required
            name='weight'
            label={`${t('body:weight')} kg`}
            type='Number'
            value={form.weight}
            variant='outlined'
            onChange={handleChange}
          />
          <TextField
            required
            name='bmi'
            label={t('body:bmi')}
            type='Number'
            value={form.bmi}
            variant='outlined'
            onChange={handleChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            required
            name='fat'
            label={`${t('body:fat')} %`}
            type='Number'
            value={form.fat}
            variant='outlined'
            onChange={handleChange}
          />
          <TextField
            required
            name='muscle'
            label={`${t('body:muscle')} %`}
            type='Number'
            value={form.muscle}
            variant='outlined'
            onChange={handleChange}
          />
        </div>
        <div className={classes.row}>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            {t('body:add-data')}
          </Button>
        </div>
      </form>
    </Paper>
  )
}

export default BodyTable
