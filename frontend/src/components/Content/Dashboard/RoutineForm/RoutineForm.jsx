import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { addRoutine } from '@data/actions/routinesActions.js'
import { useTranslation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2)
  },
  inputs: {
    margin: theme.spacing(1)
  },
  buttons: {
    display: 'flex',
    flexWrap: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(1)
  }
}))

export default function PinnedSubheaderList ({ active, handleClose }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { routines } = useSelector(state => state.routines)
  const [id, setID] = useState(routines.length + 1)
  useEffect(() => { setID(routines.length + 1) }, [routines])

  const [values, setValues] = useState({
    _id: id,
    name: '',
    label: ''
  })
  function handleChange (event) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  function clearValues () {
    setValues({
      _id: id + 1,
      name: '',
      label: ''
    })
  }

  function validateData () {
    return values.name !== '' && values.label !== ''
  }

  return (
    <Dialog
      onClose={() => handleClose(false)}
      aria-labelledby='routine-dialog'
      open={active}
    >
      <DialogTitle id='routine-dialog'>
        <Typography>
          {t('dashboard:add-routine')}
        </Typography>
        <FormControl className={classes.form}>
          <TextField
            required
            id='routine-name'
            name='name'
            label={t('dashboard:routine-name')}
            variant='outlined'
            type='text'
            value={values.name}
            onChange={handleChange}
            className={classes.inputs}
          />
          <TextField
            required
            id='routine-label'
            name='label'
            label={t('dashboard:routine-label')}
            variant='outlined'
            type='text'
            value={values.label}
            onChange={handleChange}
            className={classes.inputs}
          />
        </FormControl>
        <Box className={classes.buttons}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              clearValues()
              handleClose(false)
            }}
          >
            {t('dashboard:add-cancel')}
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              validateData() && dispatch(addRoutine(values))
              clearValues()
              handleClose(false)
            }}
          >
            {t('dashboard:add-confirm')}
          </Button>
        </Box>
      </DialogTitle>
    </Dialog>
  )
}
