import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import actionItems from 'assets/data/ActionItemsData.json'
import { WarningStatusIcon, AccessTimeIcon } from 'assets/img/IconList'
import CustomCircularProgress from '../CustomCircularProgress/CustomCirclularProgress'
import CustomMenu from '../CustomMenu/CustomDropMenu'
import MenuItems from '../../assets/data/MenuItemsData.json'
import ModeCommentIcon from '@material-ui/icons/ModeComment'
import Attachment from '@material-ui/icons/Attachment'
import CustomChip from '../CustomChip/CustomChip'
import CustomDrawer from '../CustomDraw/CustomDraw'
import { Grid } from '@material-ui/core'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells = [
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Subject' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Due On' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Assigned To' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Tags' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography className={classes.tableHeadCellStyle}>
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}))

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableCellStyle: {
    display: 'flex',
    alignItems: 'center',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  checkboxStyle: {
    color: 'rgba(0,0,0,0.38)',
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#007DFF',
    },
  },
  tableRowStyle: {
    '&.MuiTableRow-root.Mui-selected, .MuiTableRow-root.Mui-selected:hover': {
      backgroundColor: '#F2F7FB',
    },
  },
  subjectText: {
    fontFamily: 'RobotoMedium',
    fontStyle: 'normal',
    fontWeight: 'Bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
    color: '#3C4693',
  },
  modeComment: {
    width: '20px',
    height: '20px',
    color: 'rgba(0, 0, 0, 0.38)',
    marginLeft: '10px',
  },
  attachmentStyle: {
    width: '20px',
    height: '11px',
    color: 'rgba(0, 0, 0, 0.38)',
  },
  tableHeadCellStyle: {
    fontFamily: 'RobotoMedium',
    fontStyle: 'normal',
    fontWeight: 'Bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
    color: 'rgba(66, 82, 110, 0.86)',
  },
  subjectCellStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export default function ActionItemsTable() {
  const classes = useStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const dense = false
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [open, setOpen] = React.useState(false)

  const setDrawerState = () => {
    setOpen(!open)
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = actionItems.map((n) => n.id);
      setSelected(newSelecteds)
      return;
    }
    setSelected([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, actionItems.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={actionItems.length}
            />
            <TableBody>
              {stableSort(actionItems, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id)
                  const labelId = `enhanced-table-checkbox-${index}`
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      className={classes.tableRowStyle}
                      onClick={setDrawerState}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          className={classes.checkboxStyle}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {row.status.type === 'warning' ? (
                          <Box width="26px" height="26px" justifyContent="center" alignItems="center" mr="20px">
                            <WarningStatusIcon />
                          </Box>
                        ) : (
                          <>
                          </>
                        )}
                        {row.status.type === 'accesstime' ? (
                          <Box width="26px" height="26px" justifyContent="center" alignItems="center" mr="20px">
                            <AccessTimeIcon />
                          </Box>
                        ) : (
                          <>
                          </>
                        )}
                        {row.status.type === 'progress' ? (
                          <Box width="30px" height="30px" justifyContent="center" alignItems="center" mr="16px">
                            <CustomCircularProgress value={row.status.progress} label={row.status.label} />
                          </Box>
                        ) : (
                          <>
                          </>
                        )}
                        {row.status.value}
                        <CustomMenu menuItems={MenuItems} />
                      </TableCell>
                      <TableCell align="left">
                        <Grid container className={classes.subjectCellStyle}>
                          <Grid item>
                            <Typography className={classes.subjectText}>{row.subject}</Typography>
                          </Grid>
                          <Grid item>
                            <Attachment className={classes.modeComment} />
                            <ModeCommentIcon className={classes.modeComment}>
                              <Typography color="white">3</Typography>
                            </ModeCommentIcon>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="left">{row.dueOn}</TableCell>
                      <TableCell align="left">{row.assignedTo}</TableCell>
                      <TableCell align="left">
                        {row.tags.map((tag, index) => (
                          <CustomChip label={tag} key={index} />
                        ))}+1
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={actionItems.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <CustomDrawer open={open} setOpen={setOpen}/>
    </div>
  )
}