import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import RowingIcon from '@material-ui/icons/Rowing'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(2)
  }
}))

export default function PinnedSubheaderList () {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <IconButton>
        <RowingIcon fontSize='large' />
      </IconButton>
      <Typography variant='h4'>
          Ćwiczenia
      </Typography>
    </Box>
  )
}
