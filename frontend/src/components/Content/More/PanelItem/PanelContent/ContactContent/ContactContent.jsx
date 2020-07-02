import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const ContactContent = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.content}>
      <Box className={classes.item}>
        <IconButton>
          <GitHubIcon fontSize='large' />
        </IconButton>
        <Typography>
          jwieckowski
        </Typography>
      </Box>
      <Box className={classes.item}>
        <IconButton>
          <LinkedInIcon fontSize='large' />
        </IconButton>
        <Typography>
          Jakub Więckowski
        </Typography>
      </Box>
      <Box className={classes.item}>
        <IconButton>
          <FacebookIcon fontSize='large' />
        </IconButton>
        <Typography>
          Kuba Więckowski
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactContent
