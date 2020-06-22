import React, { useEffect } from 'react'
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
    height: '100%'
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

// let mockTraining = [
//   {
//     date: 24.06,
//     activeExercises: [0, 1],
//     trainingSeries: [[[90, 9], [90, 10], [90, 11], [90, 10]], [[30, 9], [30, 10], [30, 11], [30, 10]]]
//   },
//   {
//     date: 22.06,
//     activeExercises: [1, 0],
//     trainingSeries: [[[90, 9], [90, 10], [90, 11], [90, 10]], [[30, 9], [30, 10], [30, 11], [30, 10]]]
//   },
//   {
//     date: 21.06,
//     activeExercises: [0, 1],
//     trainingSeries: [[[90, 9], [90, 10], [90, 11], [90, 10]], [[30, 9], [30, 10], [30, 11], [30, 10]]]
//   }
// ]

const mockExercises = ['Barbell Bench Press', 'Machine Butterfly', 'Deadlift', 'Pistol Squat',
  'Overhead Dumbbell Press', 'Face Pull', 'Cable Curl', 'Cable Crunch']

const mockSeries = ['70x9, 70x9, 70x9, 70x9', '40x18, 40x18, 40x18', '100x10, 100x10, 100x10, 100x10',
  '84x7, 84x7, 84x8', '32x22, 32x22, 32x22, 32x22', '20x20, 20x20x, 20x20', '20x18, 20x18, 20x18', '60x17, 60x17, 60x17, 60x17']

const records = [true, false, false, false, true, true, false, false]

const HistoryContent = () => {
  const classes = useStyles()
//   const dispatch = useDispatch()

  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <List className={classes.list}>
        {mockExercises.map(exercise => {
          return (
            <ListItem key={exercise}>
              <Paper className={classes.item}>
                <ListItemText
                  primary={
                    <Typography>
                      {exercise}
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      {mockSeries[mockExercises.indexOf(exercise)]}
                    </Typography>
                  }
                />
                {
                  records[mockExercises.indexOf(exercise)] &&
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
