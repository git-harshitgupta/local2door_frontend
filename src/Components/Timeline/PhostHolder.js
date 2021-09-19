import logo from '../Files/coverimage.jpg'
import {Grid,makeStyles} from '@material-ui/core'

const useStyle=makeStyles({
    profilePhoto:{
        width: '27%',
        border: '1px solid grey',
        borderRadius: '10px',
        marginLeft: '5px',
        marginTop: '5px',
    },
    userName:{
        fontFamily:"Montserrat",
        marginTop:"10px"
    },
    box:{
        marginTop:'5px',
        width:"100%",
        boxShadow: '1px 1px 9px grey',
    },
    caption:{
        marginLeft:'5px'
    },
    postImage:{
        
        width:"100%",
        padding:"5px 5px"
    }


})
function PhostHolder(){
    const classes=useStyle();
    return(
        <div>
            <Grid container className={classes.box}>
                <Grid item container sm={3} xs={6}>
                    <img src={logo} className={classes.profilePhoto}/>
                    
                </Grid>
                <Grid item container sm={9} xs={6}>
                    <span className={classes.userName}>Shop Name</span>
                    
                </Grid>
                <Grid item container sm={12} xs={12}>
                    <h4 className={classes.caption}>Caption Here</h4>
                </Grid>
            </Grid>
            <Grid container className={classes.box}>
                <Grid item container sm={3} xs={6}>
                    <img src={logo} className={classes.profilePhoto}/>
                    
                </Grid>
                <Grid item container sm={9} xs={6}>
                    <span className={classes.userName}>Shop Name</span>
                    
                </Grid>
                <Grid item container sm={12} xs={12}>
                    <h4 className={classes.caption}>Caption Here</h4>
                </Grid>
                <Grid item container sm={12} xs={12}>
                    <img src={logo} className={classes.postImage}/>
                </Grid>
            </Grid>

        </div>
    );
}
export default PhostHolder;