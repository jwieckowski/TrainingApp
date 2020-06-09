import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@views/Layout.jsx'
import './i18n'
import { ThemeProvider } from '@material-ui/styles'
import theme from './common/constants/theme'

import Dashboard from './components/Content/Dashboard'
import Statistics from './components/Content/Statistics'
import History from './components/Content/History'
import Body from './components/Content/Body'
import More from './components/Content/More'
import Exercises from './components/Content/Exercises'
import Training from './components/Content/Training'

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Switch>
        <Route path='/training' component={Training} />
        <Route path='/exercises' component={Exercises} />
        <Route path='/more' component={More} />
        <Route path='/body' component={Body} />
        <Route path='/history' component={History} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/' exact component={Dashboard} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  </ThemeProvider>
)

export default App
