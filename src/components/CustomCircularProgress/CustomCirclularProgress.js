import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  circleProgress: {
    width: '30px !important',
    height: '30px !important',
    '&.MuiCircularProgress-colorPrimary': {
      color: '#33CCAE',
    },
    // color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  text: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '0.15px',
    '&.MuiTypography-colorTextSecondary': {
      color: 'rgba(77,77,77,0.93)',
    },
  },
  bottom: {
    color: '#DDDDDD',
  },
}))

const CustomCircularProgress = props => {
  const classes = useStyles()

  return (
    <Box
      position="relative"
      display="inline-flex"
      width="30px"
      height="30px"
      justifyContent="center"
      alignItems="center"
      mr="16px"
    >
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={30}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress thickness={4} size={30} className={classes.circleProgress} variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" className={classes.text}>
          {props.label}
        </Typography>
      </Box>
    </Box>
  )
}

CustomCircularProgress.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
}

export default function CircularStatic(props) {
  const { value, label } = props
  return <CustomCircularProgress value={value} label={label} />
}
