import React from 'react'
import {Grid,makeStyles,Hidden} from '@material-ui/core';
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import ShopkeeperNavBar from '../NavBar/ShopkeeperNavBar'
import { Link } from 'react-router-dom';
const useStyles=makeStyles({
    box:{
        background: 'lightgray',
        color: 'white',
        width: '100%',
        height: '112%',
        padding: '14px 2px',
        fontSize: '23px',
        marginTop: '3px',
        '&:hover':{
            background:'darkgray',
        }
    }
})
export const ShopkeeperSetting = () => {
    const classes=useStyles();
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null)
        history.push("/error")
    }, [])
    return (
        <div>
            <ShopkeeperNavBar/>
            <Grid container >
                <Grid item sm={2} xs={0}/>
                
                <Grid container sm={8} xs={12} className={classes.box}>
                <Link to="/shopkeeper/setting/details" style={{textDecoration:"none"}}>
                    <span>Change your details</span>
                    </Link>
                </Grid>
               
                
                <Grid item sm={2} xs={0}/><Grid item sm={2} xs={0}/>
               
                <Grid container sm={8} xs={12}  className={classes.box}>
                <Link to="/shopkeeper/setting/password" style={{textDecoration:"none"}}>
                    <span>Change your password</span >
                </Link>
                </Grid>
                </Grid>
        </div>
    )
}
