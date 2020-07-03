import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LanguageIcon from '@material-ui/icons/Language'
import DeleteIcon from '@material-ui/icons/Delete'
import FileCopyIcon from '@material-ui/icons/FileCopy'

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
        <IconButton>
          <LanguageIcon fontSize='large' />
        </IconButton>
        <Typography>
          {t('more:lang')}
        </Typography>
      </Box>
      <Box className={classes.items}>
        <IconButton>
          <DeleteIcon fontSize='large' />
        </IconButton>
        <Typography>
          {t('more:clear')}
        </Typography>
      </Box>
      <Box className={classes.items}>
        <IconButton>
          <FileCopyIcon fontSize='large' />
        </IconButton>
        <Typography>
          {t('more:download')}
        </Typography>
      </Box>
    </Box>
  )
}

export default SettingsContent
