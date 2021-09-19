import { Card, Paper,Grid, makeStyles, Typography } from "@material-ui/core";
import addShopkeeper from "../Files/addShopkeeper.png";

const useStyle= makeStyles(theme=>({
    addCustomerIcon:{
        
        width:"26px"
    }
}))
function PaperForShopkeeper(){
    const classes=makeStyles();
    return(
        <div>
            <Grid container alignItems="center" direction="column">
                
                    <Grid  item>
                    
                        
                        <Typography style={{padding:'5px',fontSize: '38px',color: '#3F51B5',fontStyle:'Open Sans Condensed'}}>Shopkeeper SignUP</Typography>
                    
                    </Grid>
                    
                    
               
            </Grid>
        </div>
    );
}

export default PaperForShopkeeper;