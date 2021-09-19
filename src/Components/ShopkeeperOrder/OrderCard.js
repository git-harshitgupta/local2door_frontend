import {  Grid,Button,createTheme,ThemeProvider} from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import { useState } from "react";
import profileImage from "../Files/profileImage.png"
import './ShopkeeperOrder.css'
const theme = createTheme({
    palette: {
      primary: yellow,
    },
  });
function OrderCard(){
    
    return(
        <div className='root'>
            <Grid container >
                <Grid container item sm={1} xs={1}></Grid>
                <Grid container item sm={3} xs={3}>
                    <img src={profileImage} className='userProfilePicture'/>
                </Grid>
                <Grid container  item sm={4} xs={4} direction='column'>
                    <span className='customerName'>Customer Name</span>
                    <span className='addrees'>Addrees</span>
                </Grid>
                <Grid container item sm={1} xs={1}></Grid>
                <Grid container direction='column' item sm={3} xs={3} >
                    <span className='priceText'>Price</span>
                    <span className='addrees'>Cash/Card</span>
                    <ThemeProvider theme={theme}>
                <Button style={{paddingLeft:"0px"}} variant="contained" color="primary" >
                    Delivered
                </Button>
            </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    );
}
export default OrderCard;