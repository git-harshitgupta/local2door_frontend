import {Grid,makeStyles} from '@material-ui/core';
import ChangePassword from './ChangePassword';
import ChangePhoneNumber from './ChangePhoneNumber';
import ChangeYourDetails from './ChangeYourDetails';

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
    const classes=useStyles();
    return(
        <div>
            <ChangePassword/>
            {/* <Grid container direction="column">
                <Grid container sm={6} xs={6} className={classes.box}>
                    <span>Change your details</span>
                </Grid>
                <Grid container sm={6} xs={6}  className={classes.box}>
                    <span>Change your password</span >
                </Grid>
                <Grid container sm={6} xs={6}  className={classes.box}>
                    <span>Change your phone number</span>
                </Grid>
                <Grid container sm={6} xs={6}  className={classes.box}>
                    <span>Change your email</span>
                </Grid>
                <Grid container sm={6} xs={6}  className={classes.box}>
                    <span>Change your location</span>
                </Grid>
            </Grid> */}
        </div>
    );
}

export default Setting;