import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  items: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'left',
    padding: theme.spacing(1)
  },
  title: {
    width: '100%'
  },
  results: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

const RecordContent = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { records } = useSelector(state => state.records)
  const { exercises } = useSelector(state => state.exercises)

  const formatRecord = (record) => record && record.length !== 0 && record.join('x')

  const showRecords = () => {
    return records.map((r, ind) => {
      return (
        <Paper key={ind} className={classes.items} elevation={4}>
          <Box className={classes.title}>
            <Typography variant='h5'>
              {Object.values(exercises).flat().filter(e => e._id === r._id)[0].name}
            </Typography>
          </Box>
          <Box className={classes.results}>
            <Typography variant='h6'>
              {`${t('more:record-max')}: ${formatRecord(r.max)}`}
            </Typography>
            <Typography variant='h6'>
              {`${t('more:record-weight')}: ${formatRecord(r.max)}`}
            </Typography>
          </Box>
        </Paper>
      )
    })
  }

  return (
    <Box className={classes.content}>
      {records && exercises && showRecords()}
    </Box>
  )
}

export default RecordContent
