import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import Box from '@material-ui/core/Box'
import TodayIcon from '@material-ui/icons/Today'
import IconButton from '@material-ui/core/IconButton'
import LanguageSelect from '../../../UI/LanguageSelect'

const useStyles = makeStyles((theme) => ({
  icons: {
    color: 'inherit'
  },
  toolbar: {
    paddingTop: '3px',
    minHeight: theme.spacing(8),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}))

export default function Header () {
  const classes = useStyles()

  return (
    <AppBar position='static' data-testid='header-id'>
      <Toolbar className={classes.toolbar}>
        <Box>
          <IconButton className={classes.icons}>
            <FitnessCenterIcon />
          </IconButton>
        </Box>
        <Typography variant='h4'>
            WorkIT
        </Typography>
        <Box>
          <LanguageSelect />
          <IconButton className={classes.icons}>
            <TodayIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
