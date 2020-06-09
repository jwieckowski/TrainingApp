import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PartExerciseItem from './PartExerciseItem'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

const useStyles = makeStyles((theme) => ({
  items: {
    width: '100%'
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  exercisesList: {
    width: '100%'
  }
}))

const displayPartExercises = (exercises, clickedItem, handleClickItem) => {
  return exercises.map(partExercise => {
    return (
      <PartExerciseItem
        key={partExercise._id}
        exercises={exercises}
        partExercise={partExercise}
        clickedItem={clickedItem}
        handleClickItem={handleClickItem}
      />
    )
  })
}

const PartListItem = ({ part, partExercise, clickedPart, handlePartClick }) => {
  const classes = useStyles()
  const [clickedItem, setClickedItem] = useState(undefined)

  const handleClickItem = (e, id) => {
    e.stopPropagation()
    setClickedItem(clickedItem === id ? undefined : id)
  }

  return (
    <ListItem
      key={part}
      className={classes.items}
      onClick={() => {
        handlePartClick(part)
        setClickedItem(undefined)
      }}
    >
      <Paper
        elevation={part === clickedPart ? 4 : 0}
        className={classes.items}
      >
        <ExpansionPanel
          className={classes.items}
          expanded={part === clickedPart}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h4'>
              {part}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List className={classes.exercisesList}>
              {displayPartExercises(partExercise, clickedItem, handleClickItem)}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </ListItem>
  )
}

export default PartListItem
