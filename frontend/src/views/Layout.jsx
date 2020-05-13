import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Navigation from '@components/Navigation/NavigationBar/Navigation'
import CustomSnackbarProvider from '@components/UI/Snackbars/CustomSnackbarProvider'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  content: {
    height: 'calc(100vh - 2*64px)', // check navigation height in frontend\src\components\Navigation\Navigation.jsx if needed
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid container maxwidth='xs' className={classes.root} data-testid='dashboard-id'>
      <CustomSnackbarProvider>
        <Navigation position='top' />
        <Grid container maxwidth='xs' className={classes.content}>
          {children}
        </Grid>
        <Navigation position='bottom' />
      </CustomSnackbarProvider>
    </Grid>
  )
}

export default Layout
