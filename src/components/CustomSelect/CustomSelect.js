import React from 'react'

// material ui core components
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: '220px',
    height: '47px',
    '& .MuiInputBase-input': {
      color: 'rgba(0,0,0,0.54)',
      fontFamily: 'RobotoMedium',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '19px',
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '0.15px',
    },
    textShadow: '0px 4px 4px #999',
    '& .MuiSelect-icon': {
      filter: 'drop-shadow(0px 4px 2px #999)',
    },
    '& .MuiInput-underline:before': {
      filter: 'drop-shadow(0px 4px 2px #333)',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '2px #FFFFFF',
    },
    '& .MuiFormLabel-root': {
      color: 'rgba(0,0,0,0.54)',
    },
  },
  paper: {
    display: 'flex',
    borderRadius: 4,
    marginTop: 16,
    minWidth: '92px !important',
    boxShadow: '0px 8px 10px 1px rgba(0 0 0 0.14)',
  },
  list: {
    '& li': {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    '& li:hover li.Mui-selected li.Mui-selected:hover': {
      background: '#F2F7FB',
    },
  },
}))

const CustomSelect = props => {
  const classes = useStyles()
  const { label, selectedItems } = props
  const [selected, setSelected] = React.useState(selectedItems[0])
  const handleSelectChange = event => {
    for (let i = 0; i < selectedItems.length; i++) {
      if (Number(selectedItems[i].id) === Number(event.target.value)) {
        setSelected(selected => ({ ...selected, id: Number(selectedItems[i].id) }))
        setSelected(selected => ({ ...selected, value: selectedItems[i].value }))
      }
    }
  }

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    getContentAnchorEl: null,
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        className={classes.selectStyle}
        MenuProps={menuProps}
        labelId="select-label"
        id="select"
        value={selected.id}
        onChange={handleSelectChange}
      >
        {selectedItems.length !== 0 &&
          selectedItems.map((selected, index) => (
            <MenuItem key={index} value={selected.id}>
              {selected.value}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
