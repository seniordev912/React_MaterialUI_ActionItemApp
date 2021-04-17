import React from 'react'

// material ui core components
import { makeStyles, FormControlLabel, Switch } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  switchLabel: {
    textShadow: '0px 4px 4px #999a9a',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.15px',
    color: '#253858',
  },
  switch: {
    filter: 'drop-shadow(0px 4px 2px #999)',
    '& .MuiSwitch-colorSecondary.Mui-checked': {
      color: '#33CCAE',
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#33CCAE',
    },
  },
}))

export default function RegSwitch(props) {
  const classes = useStyles()
  const { label } = props

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <FormControlLabel
      className={classes.switchLabel}
      control={<Switch className={classes.switch} checked={state.checkedA} onChange={handleChange} name="checkedA" />}
      label={label}
    />
  )
}
