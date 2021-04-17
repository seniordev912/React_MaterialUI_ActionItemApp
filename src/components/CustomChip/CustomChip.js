import React from 'react'

import { makeStyles, Chip } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    chipStyle: {
        height: '32px',
        background: '#F5F5F5',
        borderRadius: '16px',
        '&:hover': {
            background: '#ccc',
        },
        marginRight: '14px',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        color: '#253858',
        lineHeight: '24px',
    }
}))

const CustomChip = props => {
    const classes = useStyles()
    const { label } = props
    return <Chip label={label} className={classes.chipStyle} />
}

export default CustomChip