import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styles from 'assets/jss/layout/secondary'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Button } from '@material-ui/core'
import SearchIcon from '../../assets/img/SearchIcon.png'
import BadgeIcon from '../../assets/img/BadgeIcon.svg'
import AprilIcon from '../../assets/img/AprilIcon.svg'
import GroupIcon from '../../assets/img/GroupIcon.png'

const useStyles = makeStyles(styles)

export default function Header() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleTabChange = (event, selectedTab) => {
    setValue(selectedTab)
  }

  return (
    <div className={classes.header}>
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabsRoot}
            >
              <Tab label="HOME" />
              <Tab label="THERMALTEK" />
              <Tab label="PANASONIC" />
            </Tabs>
          </Grid>
          <Grid justify="flex-end" item container xs={6} className={classes.headerRight}>
            <Button>
              <img src={SearchIcon} width={40} height={40}/>
            </Button>
            <Button>
              <img src={BadgeIcon} width={40} height={40}/>
            </Button>
            <Button>
              <img src={AprilIcon} width={40} height={40}/>
            </Button>
            <Button>
              <img src={GroupIcon} width={38} height={38}/>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
