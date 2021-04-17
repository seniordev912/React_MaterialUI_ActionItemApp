import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import ActionItemsTable from '../Tables/ActionItemsTable'
import Typography from '@material-ui/core/Typography'
import CustomSelect from '../CustomSelect/CustomSelect'
import assignedItems from '../../assets/data/AssignedItemsData.json'

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
        color: 'white',
        textTransform: 'none',
    },
    gridItem: {
        display: 'flex',
        justifyContent: "flex-end",
    }
}));

export default function ActionItems() {
    const classes = useStyles();
    // const defaultProps = {
    //     options: null,
    //     getOptionLabel: (option) => option.title,
    // };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.partitionTitle}>
                        Action Items
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <CustomSelect selectedItems={assignedItems} />
                </Grid>
                <Grid className={classes.gridItem} item xs={6}>
                    <Button className={classes.actionButton}>+ Add Action Item</Button>
                </Grid>
                <Grid item xs={12}>
                    <ActionItemsTable />
                </Grid>
            </Grid>
        </div>
    );
}