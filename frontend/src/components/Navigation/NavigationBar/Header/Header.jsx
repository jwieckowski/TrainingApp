import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import Box from '@material-ui/core/Box'
import TodayIcon from '@material-ui/icons/Today'
import IconButton from '@material-ui/core/IconButton'
import LanguageSelect from '../../../UI/LanguageSelect'
import Calendar from '../../../Content/Calendar'

const useStyles = makeStyles((theme) => ({
  icons: {
    color: theme.palette.text.main
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
          <Link to='/'>
            <IconButton className={classes.icons}>
              <FitnessCenterIcon />
            </IconButton>
          </Link>
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
        <Calendar />
      </Toolbar>
    </AppBar>
  )
}
