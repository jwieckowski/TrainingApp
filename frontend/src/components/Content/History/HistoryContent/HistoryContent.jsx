import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'auto',
    height: '90%',
    maxHeight: '90%'
  },
  list: {
    width: '100%',
    height: '90%'
  },
  item: {
    width: '100%',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recordIcon: {
    color: theme.palette.secondary.main
  }
}))

const HistoryContent = ({ trainingExercises, historyTraining, records }) => {
  const classes = useStyles()

  const formatTraining = (training) => training && training.length !== 0 && training.map(series => series.join('x')).join(', ')
  const formatRecord = (record) => record && record.length !== 0 && record.join('x')

  const checkRecord = (records, exercise, index) => {
    const currentRecords = records.filter(r => r._id === exercise._id)
    if (currentRecords === undefined || currentRecords.length === 0) return

    const training = formatTraining(historyTraining.trainingSeries[historyTraining.activeExercises[index]])
    return training.includes(formatRecord(currentRecords[0].max)) || training.includes(formatRecord(currentRecords[0].weight))
  }

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <List className={classes.list}>
        {trainingExercises.map((exercise, index) => {
          return (
            <ListItem key={exercise}>
              <Paper className={classes.item}>
                <ListItemText
                  primary={
                    <Typography>
                      {exercise.name}
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      {formatTraining(historyTraining.trainingSeries[historyTraining.activeExercises[index]])}
                    </Typography>
                  }
                />
                {
                  checkRecord(records, exercise, index) &&
                    <IconButton className={classes.recordIcon}>
                      <EmojiEventsIcon fontSize='large' />
                    </IconButton>
                }
              </Paper>
            </ListItem>
          )
        })}
      </List>
    </Grid>
  )
}
export default HistoryContent
