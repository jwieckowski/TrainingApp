import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@views/Layout.jsx'
import './i18n'
import { ThemeProvider } from '@material-ui/styles'
import theme from './common/constants/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Switch>
        <Route path='/authors' component={'AuthorsList'} />
        <Route path='/hvac' render={() => 'HVAC'} />
        <Route path='/' exact component={'Dashboard'} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  </ThemeProvider>
)

export default App
