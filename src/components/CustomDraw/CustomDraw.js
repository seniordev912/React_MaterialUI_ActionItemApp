import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
    root: {
        width: '600px',
    },
    subTitle: {
        position: 'relative',
        height: '32px',
        left: '24px',
        top: '16px',
        fontFamily: 'RobotoMedium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '160%',
        letterSpacing: '0.15px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
}))

export default function CustomDraw ({open, setOpen}) {

    const classes = useStyles()
    const toggleDrawer = ( open ) =>{
        setOpen(!open)
    }
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
            <Grid
                className={classes.root}
                container
                direction="column"
            >
                <Grid item>
                    <Typography className={classes.subTitle}>RFQ for Furnace 3.4</Typography>
                </Grid>
                <Grid item>
                    <Grid container>

                    </Grid>
                </Grid>
            </Grid>
        </Drawer>
    )
}