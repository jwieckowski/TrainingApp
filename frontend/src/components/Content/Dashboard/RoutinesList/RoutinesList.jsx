import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { loadRoutines } from '@data/actions/routinesActions.js'
import { useTranslation } from 'react-i18next'
import Spinner from '../../../UI/Spinner'
import Page404 from '../../../UI/Page404'
import RoutineForm from '../RoutineForm'
import Item from './Item'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
    maxHeight: '100%'
  },
  subheader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    color: 'inherit'
  }
}))

const drawItems = (routines, clickedItem, handleClickedItem) => {
  return routines.map(routine => {
    return (
      <Item
        key={routine._id}
        routines={routines}
        id={routine._id}
        name={routine.name}
        label={routine.label}
        clickedItem={clickedItem}
        handleClickedItem={handleClickedItem}
      />
    )
  })
}

const RoutinesList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { routines, loadingRoutines, loadError } = useSelector(state => state.routines)
  const [activeForm, setActiveForm] = useState(false)
  const [clickedItem, setClickedItem] = useState(undefined)
  useEffect(() => { dispatch(loadRoutines()) }, [])

  function handleClick (state) {
    setActiveForm(state)
  }

  function handleClickItem (e, id) {
    e.stopPropagation()
    setClickedItem(clickedItem === id ? undefined : id)
  }

  let content = <Spinner />

  if (!loadingRoutines) {
    if (!loadError) {
      content = (
        <List className={classes.root} subheader={<li />}>
          <ListSubheader className={classes.subheader}>
            <Typography variant='h6'>
              {t('dashboard:training-routine')}
            </Typography>
            <Box>
              <IconButton className={classes.icon} onClick={() => handleClick(true)}>
                <AddCircleIcon fontSize='large' />
              </IconButton>
            </Box>
          </ListSubheader>
          {drawItems(routines, clickedItem, handleClickItem)}
          <RoutineForm active={activeForm} handleClose={handleClick} />
        </List>
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

export default RoutinesList
