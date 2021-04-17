import React from 'react'

// material ui core components
import { makeStyles, IconButton, Menu, MenuItem } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const useStyles = makeStyles(() => ({
  root: {
    color: 'rgba(0,0,0,0.54)',
  },
}))

const CustomDropMenu = props => {
  const classes = useStyles()
  const { menuItems } = props

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="drop-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
      >
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="drop-menu"
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        {menuItems.map(item => (
          <MenuItem key={item.id} selected={item === 'Pyxis'} onClick={handleClose}>
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default CustomDropMenu
