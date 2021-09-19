import { Card, Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import PaperForUser from "./PaperForUser";
import FormForCustomer from "./FormForCustomer";
import addIcon from '@material-ui/icons/GroupAdd';
import PaperForShopkeeper from "./PaperForShopkeeper";
import FormForShopkeeper from "./FormForShopkeeper";
import { useState } from "react";

function SignUpCustomer(){
    
    const [userDetails,setUserDetails]=useState({
        
    });
    const getUserDetails=(user)=>{

    }
    const getLocation=(location)=>{
        
    }

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
                       
                        
                        <FormForCustomer userDetails={getUserDetails}/>
                        
                        
                    </Grid> 
            </Grid>
        </div>
    );
}

export default SignUpCustomer;