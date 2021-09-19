import {Grid,Hidden,makeStyles} from '@material-ui/core'
import PaperForShopkeeper from './PaperForShopkeeper';
import FormForShopkeeper from './FormForShopkeeper';
const useStyles=makeStyles({
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'15vw',
        height: '-webkit-fill-available',
        backgroundColor:'#3F51B5'
    }
})
function SignUpShopKeeper(){
    const classes = useStyles();
    return(
        <div>
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item xs={2} sm={2}>
                    <div className={classes.sideMenu}></div>
                </Grid>
                    <Grid container direction="column" xs={10} sm={10} style={{marginTop:"10px"}}>
                        <PaperForShopkeeper/>
                        <Grid>
                            <Hidden only='xs'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            </Hidden>
                        </Grid>
                        <FormForShopkeeper/>
                    </Grid> 
            </Grid>
        </div>
    );
}
export default SignUpShopKeeper;