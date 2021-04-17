import React from 'react'
import { Box, Grid, makeStyles, ListItem, List } from '@material-ui/core'
// import SvgIcon from '@material-ui/core/SvgIcon'
// import LogoIcon from '../../assets/img/LogoIcon.svg'
import { LogoIcon } from '../../assets/img/IconList'
import { ScheduleIcon } from '../../assets/img/IconList'
import { ChartIcon } from '../../assets/img/IconList'
import { CheckIcon } from '../../assets/img/IconList'
import { HomeIcon } from '../../assets/img/IconList'
import { useLocation, Link } from 'react-router-dom'
// import HomeIcon from '../../assets/img/HomeIcon.png'
// import CheckIcon from '../../assets/img/CheckIcon.png'
// import ChartIcon from '../../assets/img/ChartIcon.png'
// import ShareIcon from '../../assets/img/ShareIcon.png'
// import { Button } from '@material-ui/core'
const useStyles = makeStyles(() => ({
  closeNavbar: {
    position: 'fixed',
    width: '60px',
    height: '100%',
    background: '#252F3D',
    boxShadow: '0px 4px 4px #999a9a',
  },
  logoIcon: {
    width: '45px',
    height: '45px',
    margin: '10px 7.5px 0 7.5px',
  },
  noPadding: {
    // padding: '0px',
    '&.MuiList-padding': {
      padding: '0px'
    },
  },
  listItem: {
    // padding: '16px 12px 4px 12px',
    marginTop: '16px',
    justifyContent: 'center',
    '&:hover': {
      background: '#3e4d6747',
    },
    '&$active': {
      background: '#3E4D67',
    },
  }
}))

const NavItems = [
  {
    path: '/home',
    icon: HomeIcon,
  },
  {
    path: '/schedule',
    icon: CheckIcon,
  },
  {
    path: '/analytics',
    icon: ChartIcon,
  },
  {
    path: '/rounds',
    icon: ScheduleIcon,
  },
]

export const NavItemIcon = ({ Icon, active }) => {
  return <Icon active={active} />
}

export default function Navbar() {
  const classes = useStyles()
  const location = useLocation()
  return (
    <Grid className={classes.closeNavbar}>
      <Grid container display="flex" justifyContent="center" alignItems="center"> 
        <Box p={1}>
          <LogoIcon />
        </Box>
      </Grid>
      <Grid>
        <List className={classes.noPadding}>
          {NavItems.map((item, key) => (
            <ListItem
              key={key}
              className={`${classes.listItem} ${location.pathname === item.path ? classes.active : ''}`}
            >
              <Link to={item.path}>
                <NavItemIcon Icon={item.icon} active={location.pathname === item.path ? true : false} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>

  )
}
