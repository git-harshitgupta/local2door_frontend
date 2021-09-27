import {  Grid, Hidden} from "@material-ui/core";
import PaperForUser from "./PaperForUser";
import FormForCustomer from "./FormForCustomer";


function SignUpCustomer(){

    return(
        <div>
            <Grid container  >
                <Grid container style={{background:"#3F51B5",height:"800px"}} item xs={2} sm={2}/>
                    
                
                    <Grid container direction="column" xs={10} sm={10} style={{marginTop:"10px"}}>
                        <PaperForUser/>
                        
                        
                        <Hidden only='xs'>
                            
                            <br/>
                            <br/>
                            <br/>
                        </Hidden>
                       
                        
                        <FormForCustomer />
                        
                        
                    </Grid> 
            </Grid>
        </div>
    );
}

export default SignUpCustomer;