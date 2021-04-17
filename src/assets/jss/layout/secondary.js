import { sidebarWidth, closeSidebarWidth, horizontalPadding } from 'assets/jss/constants'

const SecondaryStyle = {
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  header: {
    height: '60px',
    position: 'fixed',
    right: '0px',
    width: 'calc(100% - 60px)',
    background: 'white',
    boxShadow: '0 4px 4px 0 rgb(0 0 0 / 25%)',
    zIndex: '100',
  },
  headerRight: {
    display: 'flex',
    justify: 'flex-end',
    paddingRight: '18px',
  },
  tabsRoot: {
    height: '60px',
    width: '623px',
    '& .MuiButtonBase-root': {
      height: '60px',
    },
    '& .MuiTab-textColorPrimary': {
      fontFamily: 'RobotoMedium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '26px',
      letterSpacing: '0.46px',
      textTransform: 'uppercase',
    },
    '& .MuiTab-textColorPrimary.Mui-selected': {
      color: '#33CCAE',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#33CCAE',
    },
  },
  navbar: {
    position: 'fixed',
    width: sidebarWidth,
    height: '100%',
    minWidth: sidebarWidth,
    padding: '0px 0px 0px ' + horizontalPadding,
    transition: 'all .5s',
    background: '#252F3D',
  },
  closeNavbar: {
    position: 'fixed',
    width: '60px',
    height: '100%',
    background: '#252F3D',
    boxShadow: '0px 4px 4px #999a9a',
  },
  logoicon: {

  },
  children: {
    width: 'calc(100% - ' + sidebarWidth + ' - 44px)', // 44px is padding * 2
    transition: 'all .5s',
  },
  closeChildren: {
    width: 'calc(100% - ' + closeSidebarWidth + ' - 66px)', // 66px is padding * 2
    transition: 'all .5s',
  },
  homeIcon: {
    marginTop: '15px',
  },
  mainContainer: {
    width: '100%',
    margin: '60px 0 0 60px',
    padding: '30px 27px 30px 32px',
  }
}

export default SecondaryStyle
