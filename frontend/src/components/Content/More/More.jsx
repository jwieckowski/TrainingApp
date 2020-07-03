import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { loadExercises } from '@data/actions/exercisesActions.js'
import { loadRecords } from '@data/actions/recordsActions.js'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

import List from '@material-ui/core/List'
import PanelItem from './PanelItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
    maxHeight: '100%'
  }
}))

const displayPanelItem = (panels, clickedPanel, handlePanelClick) => {
  return panels.map(panel => {
    return (
      <PanelItem
        key={panel}
        panel={panel}
        clickedPanel={clickedPanel}
        handlePanelClick={handlePanelClick}
      />
    )
  })
}

const More = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { loadingRecords, loadError } = useSelector(state => state.records)
  const { loadingExercises } = useSelector(state => state.exercises)

  useEffect(() => {
    dispatch(loadExercises())
    dispatch(loadRecords())
  }, [])

  const panels = [t('more:records'), t('more:smth'), t('more:settings'), t('more:contact'), t('more:about')]

  const [clickedPanel, setClickedPanel] = useState(undefined)

  const handlePanelClick = (key) => {
    setClickedPanel(clickedPanel === key ? undefined : key)
  }

  let content = <Spinner />
  if (!loadingExercises && !loadingRecords) {
    if (!loadError) {
      content = (
        <Grid container maxwidth='xs'>
          <List className={classes.root}>
            {displayPanelItem(panels, clickedPanel, handlePanelClick)}
          </List>
        </Grid>
      )
    } else {
      content = <Page404 />
    }
  }

  return (
    <>
      {content}
    </>
  )
}
export default More
