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
    justifyContent: 'center',
    textDecoration: 'none'
  },
  text: {
    color: 'black'
  }
}))

const ContactContent = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const userLinks = {
    github: 'https://github.com/jwieckowski',
    linkedIn: 'https://www.linkedin.com/in/jakubwieckowski/',
    facebook: 'https://www.facebook.com/kuba.wieckowski.10'
  }

  return (
    <Box className={classes.content}>
      <Box className={classes.item}>
        <a
          href={userLinks.github}
          target='_blank'
          rel='noopener noreferrer'
          className={classes.item}
        >
          <IconButton>
            <GitHubIcon fontSize='large' />
          </IconButton>
          <Typography className={classes.text}>
            jwieckowski
          </Typography>
        </a>
      </Box>
      <Box className={classes.item}>
        <a
          href={userLinks.linkedIn}
          target='_blank'
          rel='noopener noreferrer'
          className={classes.item}
        >
          <IconButton>
            <LinkedInIcon fontSize='large' />
          </IconButton>
          <Typography className={classes.text}>
            Jakub Więckowski
          </Typography>
        </a>
      </Box>
      <Box className={classes.item}>
        <a
          href={userLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
          className={classes.item}
        >
          <IconButton>
            <FacebookIcon fontSize='large' />
          </IconButton>
          <Typography className={classes.text}>
            Kuba Więckowski
          </Typography>
        </a>
      </Box>
    </Box>
  )
}

export default ContactContent
