import React from 'react'
import { makeStyles, Grid, Typography, Box, Tabs, Tab, Button } from '@material-ui/core'
import Detail from 'components/pages/Home/Detail'
import PropTypes from 'prop-types'
import AvatarIcon from 'assets/imgs/AvatarIcon'
import AlarmIcon from 'assets/imgs/AlarmIcon'
import SearchIcon from 'assets/imgs/SearchIcon'
const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    height: '60px',
    right: '0px',
    width: 'calc(100% - 60px)',
    background: theme.color.white,
    boxShadow: '0 4px 4px 0 rgb(0 0 0 / 25%)',
    zIndex: 1220,
  },
  tabRoot: {
    height: '60px',
    width: '623px',
    '& .MuiButtonBase-root': {
      height: '60px',
    },
    '& .MuiTab-textColorPrimary': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '26px',
      letterSpacing: '0.46px',
      textTransform: 'uppercase',
      color: theme.color.tab,
    },
    '& .MuiTab-textColorPrimary.Mui-selected': {
      color: theme.color.tabSelect,
    },
    '& .MuiTabs-indicator': {
      backgroundColor: theme.color.tabSelect,
    },
  },
  iconContent: {
    paddingTop: '11px',
    paddingRight: '25px',
  },
  btnAvatar: {
    padding: '0px',
    background: 'transparent',
    minWidth: '0px',
    minHeight: '0px',
    height: '40px',
  },
  dateContent: {
    color: 'rgba(0, 0, 0, 0.38)',
    display: 'block',
    textAlign: 'center',
    marginRight: '20px',
    '& .date, & .month': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '26px',
      letterSpacing: '0.46px',
      textTransform: 'uppercase',
    },
    '& .date': {
      fontSize: '36px',
    },
    '& .month': {
      fontSize: '14px',
    },
  },
  btnAlarm: {
    padding: '0px',
    background: 'transparent',
    minWidth: '0px',
    minHeight: '0px',
    height: '40px',
    marginRight: '48.5px',
    position: 'relative',
    '& .cntAlarm': {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: '0px',
      right: '-30px',
      padding: '0px 6px',
      background: theme.color.primaryRed,
      borderRadius: '64px',
      height: '20px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '0.14px',
      color: theme.color.white,
    },
  },
  btnSearch: {
    padding: '0px',
    background: 'transparent',
    minWidth: '0px',
    minHeight: '0px',
    height: '40px',
    marginRight: '48.5px',
  },
}))
function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Grid>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}
export default function Header() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleClickAvatar = () => {
    setOpen(!open)
  }
  return (
    <Grid className={classes.root} id="header" container>
      <Grid md={6} lg={6} item>
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabRoot}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Thermaltek" {...a11yProps(1)} />
          <Tab label="Panasonic" {...a11yProps(2)} />
        </Tabs>
      </Grid>
      <Grid justify="flex-end" md={6} lg={6} item container className={classes.iconContent}>
        <Button className={classes.btnSearch}>
          <SearchIcon />
        </Button>
        <Button className={classes.btnAlarm}>
          <AlarmIcon />
          <Typography component="span" className="cntAlarm">
            12
          </Typography>
        </Button>
        <Typography component="div" className={classes.dateContent}>
          <Typography className="date">2</Typography>
          <Typography className="month">April</Typography>
        </Typography>
        <Button className={classes.btnAvatar} onClick={handleClickAvatar}>
          <AvatarIcon />
        </Button>
      </Grid>
      <Detail open={open} setOpen={setOpen} />
    </Grid>
  )
}