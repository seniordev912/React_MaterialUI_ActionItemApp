import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/layout/secondary'
import ActionItems from './ActionItems'
import BoardSummary from './BoardSummary'

const useStyles = makeStyles(styles)

export default function MainContainer() {
  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>
      <ActionItems />
      <BoardSummary />
    </div>
  )
}
