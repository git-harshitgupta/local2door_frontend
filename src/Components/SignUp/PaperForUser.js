import { Card, Paper,Grid, makeStyles, Typography } from "@material-ui/core";
import addCustomer from "../Files/addCustomer.png";

const useStyle= makeStyles(theme=>({
    addCustomerIcon:{
        
        width:"26px"
    }
}))
function PaperForUser(){
    const classes=makeStyles();
    return(
        <div>
            <Grid container direction="column" alignItems="center">
                
                    <Grid item>
                    
                        
                        <Typography style={{padding:'5px',fontSize: '38px',color: '#3F51B5',fontStyle:'Open Sans Condensed'}}>Customer SignUP</Typography>
                    
                    </Grid>
                    
                    
                
                    
                
            </Grid>
        </div>
    );
}

export default PaperForUser;