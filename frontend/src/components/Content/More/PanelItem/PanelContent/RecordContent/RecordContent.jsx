import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  items: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: theme.spacing(1)
  }
}))

const SettingsContent = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.content}>
      <Box className={classes.items}>
        <Typography>
          Application made with usage of Node.js and its`&apos;` frameworks: React + Redux, Fastify and MongoDB
        </Typography>
      </Box>
      <Box className={classes.items}>
        <Typography>
          Application provides access to store training data, create training routines and analyze obtained results
        </Typography>
      </Box>
      <Box className={classes.items}>
        <Typography>
          It`&apos;`s usefull and it doesn`&apos;`t require to make any payments for full functionality
        </Typography>
      </Box>
    </Box>
  )
}

export default SettingsContent
