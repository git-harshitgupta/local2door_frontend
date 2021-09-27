import {  Grid,Button,createTheme,ThemeProvider} from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import axios from "axios";
import { useState } from "react";
import { USER_API_BASE_URL } from "../Constant/Constants";
import profileImage from "../Files/profileImage.png"
import './ShopkeeperOrder.css'
const theme = createTheme({
    palette: {
      primary: yellow,
    },
  });
function OrderCard(props){
    const [accpetButton,setAcceptButton]=useState(true);
    const acceptOrderHandler=()=>{
        axios.get(USER_API_BASE_URL+"/shopkeeper/acceptorder?orderId="+props.data.orderId,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken")
            }
        }).then((resp)=>{
            setAcceptButton(false)
        })
    }
    return(
        <div className='root'>
            <Grid container >
                <Grid container item sm={1} xs={1}></Grid>
                
                <Grid container  item sm={4} xs={4} direction='column'>
                    <span className='customerName'>{props.data.customerName}</span>
                    <span className='addrees'>House No:{props.data.customerHouseNo}</span>
                    <span className='addrees'>Addreas:{props.data.customerAdd}</span>
                    <span className='addrees'>Order Date:{props.data.orderDate}</span>
                    <span className='addrees'>Order Time:{props.data.orderTime}</span>
                </Grid>
                <Grid container item sm={3} xs={3}></Grid>
                <Grid container direction='column' item sm={4} xs={4} >
                    <span className='priceText'>Total:{props.data.totalPrice}</span>
                    <span className='addrees'>Payment:{props.data.payment=='true'?"Done":"Cash On Delivery"}</span>
                    <ThemeProvider theme={theme}>
                        {accpetButton?<Button onClick={acceptOrderHandler} style={{paddingLeft:"0px"}} variant="contained" color="primary" >
                    Accept Order
                </Button>:"On Progress"}
            </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    );
}
export default OrderCard;