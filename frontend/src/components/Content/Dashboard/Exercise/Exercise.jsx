import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import RowingIcon from '@material-ui/icons/Rowing'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    margin: 0,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}))

export default function Exercise () {
  const classes = useStyles()
  const history = useHistory()
  const { t } = useTranslation()

  return (
    <Box
      className={classes.root}
      onClick={() => history.push('/exercises')}
    >
      <IconButton>
        <RowingIcon fontSize='large' />
      </IconButton>
      <Typography variant='h4' style={{ textDecoration: 'none' }}>
        {t('exercises:exercises')}
      </Typography>
    </Box>
  )
}
