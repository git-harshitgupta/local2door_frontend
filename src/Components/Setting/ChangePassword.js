import { Grid,Button } from "@material-ui/core";
import './Setting.css'
function ChangePassword(){
    return(
        <div>
            <Grid container direction="column">
            <Grid container item sm={7}>
                    <span className='text'>Enter Your Old Password</span>
                    </Grid>
                    <Grid container item sm={7}>
                    <input type="password" className='textBox'/>
                    </Grid>
                    <Grid container item sm={7}>
                    <span className='text'>Enter New Password</span></Grid>
                    <Grid container item sm={7}>
                    <input type="password" className='textBox'/>
                    </Grid>
                    <Grid container item sm={7}>
                    <span className='text'>Confirm Password</span></Grid>
                    <Grid container item sm={7}>
                    <input type="text" className='textBox'/>
                    </Grid>
                    <Grid container item sm={3}>
                <Button style={{paddingLeft:"0px"}} variant="contained" color="primary">
                    Submit
                </Button>
                </Grid>
                </Grid>
        </div>
    );
}
export default ChangePassword;