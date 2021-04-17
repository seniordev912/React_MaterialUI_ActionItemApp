import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import MainContainer from '../../components/MainContainer/MainContainer'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/layout/secondary'

export default function SecondaryLayout() {
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  return (
    <div className={classes.flex}>
      <Header />
      <Navbar />
      <MainContainer />
    </div>
  )
}

SecondaryLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
