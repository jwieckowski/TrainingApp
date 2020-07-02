import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

import IconButton from '@material-ui/core/IconButton'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import SaveIcon from '@material-ui/icons/Save'
import SettingsIcon from '@material-ui/icons/Settings'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import InfoIcon from '@material-ui/icons/Info'

import SettingsContent from './PanelContent/SettingsContent'
import AboutContent from './PanelContent/AboutContent'
import RecordContent from './PanelContent/RecordContent'
import ContactContent from './PanelContent/ContactContent'
import SmthContent from './PanelContent/SmthContent'

const useStyles = makeStyles((theme) => ({
  items: {
    width: '100%'
  },
  content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  exercisesList: {
    width: '100%'
  }
}))

const PanelItem = ({ panel, clickedPanel, handlePanelClick }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const panels = [t('more:records'), t('more:smth'), t('more:settings'), t('more:contact'), t('more:about')]

  const panelIcon = (panel) => {
    const icons = {
      0: <EmojiEventsIcon fontSize='large' />,
      1: <SaveIcon fontSize='large' />,
      2: <SettingsIcon fontSize='large' />,
      3: <ContactMailIcon fontSize='large' />,
      4: <InfoIcon fontSize='large' />
    }
    return icons[panels.indexOf(panel)]
  }

  const panelContent = (panel) => {
    const contents = {
      0: <RecordContent />,
      1: <SmthContent />,
      2: <SettingsContent />,
      3: <ContactContent />,
      4: <AboutContent />
    }
    return contents[panels.indexOf(panel)]
  }

  return (
    <ListItem
      key={panel}
      className={classes.items}
      onClick={() => { handlePanelClick(panel) }}
    >
      <Paper
        elevation={panel === clickedPanel ? 4 : 0}
        className={classes.items}
      >
        <ExpansionPanel
          className={classes.items}
          expanded={panel === clickedPanel}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <div className={classes.content}>
              <IconButton>
                {panelIcon(panel)}
              </IconButton>
              <Typography variant='h4'>
                {panel}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List className={classes.exercisesList}>
              {panelContent(panel)}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </ListItem>
  )
}

export default PanelItem
