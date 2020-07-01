import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SelectProperty from './SelectProperty'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    height: '10%',
    margin: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabs: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const InfoBar = ({ exercises, filters, properties, handleChange }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      {properties.map((prop, index) => {
        return (
          <Box className={classes.tabs} key={prop}>
            <SelectProperty
              label={prop.label}
              items={prop.items}
              value={filters[index][0]}
              index={index}
              handleChange={handleChange}
            />
          </Box>
        )
      })}
    </Grid>
  )
}

export default InfoBar
