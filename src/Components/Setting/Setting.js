import {Grid,makeStyles,Hidden} from '@material-ui/core';
import CustomerNavBar from "../NavBar/CustomerNavBar";
import SideMenu from "../NavBar/SideMenu";
import {useHistory,Link} from 'react-router-dom'
import {useEffect} from 'react'

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

function Setting(){
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null)
        history.push("/error")
    }, [])
    const classes=useStyles();
    return(
        <div>
            <CustomerNavBar/>
            <Hidden only="xs">
                <SideMenu/>
            </Hidden>
           
            
            <Grid container >
                <Grid item sm={3} xs={0}/>
                
                <Grid container sm={8} xs={12} className={classes.box}>
                <Link to="/customer/setting/details" style={{textDecoration:"none"}}>
                    <span>Change your details</span>
                    </Link>
                </Grid>
               
                
                <Grid item sm={3} xs={0}/>
               
                <Grid container sm={8} xs={12}  className={classes.box}>
                <Link to="/customer/setting/password" style={{textDecoration:"none"}}>
                    <span>Change your password</span >
                </Link>
                </Grid>
                <Grid item sm={3} xs={0}/>
                <Grid container sm={8} xs={12}  className={classes.box}>
                <Link to="/customer/setting/number" style={{textDecoration:"none"}}>
                    <span>Change your phone number</span>
                </Link>
                </Grid>
                <Grid item sm={3} xs={0}/>
                <Grid container sm={8} xs={12}  className={classes.box}>
                <Link to="/customer/setting/location" style={{textDecoration:"none"}}>
                    <span>Change your location</span>
                </Link>
                </Grid>
            </Grid>
        </div>
           

        
        
    );
}

export default Setting;