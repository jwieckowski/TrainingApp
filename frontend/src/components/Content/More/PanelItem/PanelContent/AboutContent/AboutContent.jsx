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

const AboutContent = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.content}>
      <Box className={classes.items}>
        <Typography>
          {t('more:app-made')}
        </Typography>
      </Box>
      <Box className={classes.items}>
        <Typography>
          {t('more:app-action')}
        </Typography>
      </Box>
      <Box className={classes.items}>
        <Typography>
          {t('more:app-desc')}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutContent
