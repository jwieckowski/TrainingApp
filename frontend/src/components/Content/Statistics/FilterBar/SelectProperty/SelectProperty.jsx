import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

function SelectProperty ({ label, items, value, index, handleChange }) {
  const classes = useStyles()

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='id'>{label}</InputLabel>
        <Select
          value={value}
          onChange={(e) => handleChange(e, index)}
          label={label}
        >
          {items.map(item => {
            return (
              Array.isArray(item)
                ? <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>
                : <MenuItem key={item} value={item}>{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectProperty
