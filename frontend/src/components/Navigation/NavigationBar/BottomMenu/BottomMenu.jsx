import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useTranslation } from 'react-i18next'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  tabs: {
    flexGrow: 1,
    minHeight: theme.spacing(7)
  },
  buttons: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'right',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: theme.spacing(7)
  },
  toolbar: {
    paddingTop: '3px',
    minHeight: theme.spacing(6),
    alignItems: 'baseline'
  }
}))

function LinkTab (props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  )
}

function checkActive (url) {
  const sites = {
    '/': 0,
    '/statistics': 1,
    '/history': 2,
    '/body': 3,
    '/more': 4
  }
  return sites[url] || 0
}

export default function Header () {
  const classes = useStyles()
  const location = useLocation()

  const { t } = useTranslation()

  const [value, setValue] = useState(checkActive(location.pathname))
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position='static' data-testid='header-id'>
      <Toolbar className={classes.toolbar}>
        <Tabs
          edge='start'
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label='Navigation tabs'
          indicatorColor='secondary'
          centered
        >
          <LinkTab label={t('dashboard:menu-training')} to='/' />
          <LinkTab label={t('dashboard:menu-stats')} to='/statistics' />
          <LinkTab label={t('dashboard:menu-history')} to='/history' />
          <LinkTab label={t('dashboard:menu-body')} to='/body' />
          <LinkTab label={t('dashboard:menu-more')} to='/more' />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
