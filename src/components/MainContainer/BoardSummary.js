import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import BoardSummaryTable from '../Tables/BoardSummaryTable'
import CustomSelect from '../CustomSelect/CustomSelect'
import CustomSwitch from '../CustomSwitch/CustomSwitch'
import selectedBoardItems from '../../assets/data/SelectedBoardItemsData.json'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    partitionTitle: {
        color: '#253858',
        display: 'block',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '0px',
        textTransform: 'none',
        textShadow: '0 4px 4px rgb(0 0 0 / 25%)',
    },
    autoComplete: {
        width: '220px',
    },
    actionButton: {
        height: '42px',
        borderRadius: '64px',
        padding: '8px 22px',
        backgroundColor: '#33CCAE',
        '&:hover': {
            backgroundColor: '#5ee4ca',
        },
        boxShadow: '0px 4px 4px #999a9a',
        lineHeight: '26px',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#FFFFFF',
        textTransform: 'none',
    },
    gridItem: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    formControl: {
        display: 'flex',
        alignItems: 'flex-end',
    }
}));

export default function ActionItems() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.partitionTitle}>Board Summary</div>
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect selectedItems={selectedBoardItems} />
                </Grid>
                <Grid className={classes.formControl} item xs={2}>
                    <CustomSwitch label="Show everyone" />
                </Grid>
                <Grid className={classes.gridItem} item xs={8}>
                    <Button className={classes.actionButton}><text>+ Add Board</text></Button>
                </Grid>
                <Grid item xs={12}>
                    <BoardSummaryTable />
                </Grid>
            </Grid>
        </div>
    );
}