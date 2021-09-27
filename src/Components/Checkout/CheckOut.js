import React, { useState,useContext,useEffect } from 'react'
import SideMenu from '../NavBar/SideMenu'
import Button from '@mui/material/Button';
import CustomerNavBar from '../NavBar/CustomerNavBar'
import { Hidden } from '@mui/material'
import Stripe from '../Payment/Stripe'
import { CartContext } from "../Context/CartContext";
import { useHistory } from "react-router";
import ApiService from '../Service/ApiService';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const CheckOut = () => {
    const history=useHistory();
    const [cart,setCart]=useContext(CartContext);
    const [codCheck,setCodCheck]=useState(false);
    const [onlineCheck,setOnlineCheck]=useState(false);
    const [errMsg,setErrMsg]=useState();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])

    const placeOrder=()=>{
        setErrMsg("");
        console.log(cart);
        console.log(localStorage.getItem("totalPrice"))
        console.log(localStorage.getItem("shopId"))
        ApiService.getProductAvailability(cart).then((resp)=>{
            ApiService.placeOrder(cart).then((resp)=>{
                history.push("/customermenu");
                localStorage.removeItem("shopId");
                localStorage.removeItem("totalPrice");
                toast("Order has been placed");
                setCart("")
            })
        }).catch((error)=>{
            setErrMsg(error.response.data.message);
        })
    }
    return (
        <div>
        <CustomerNavBar/>
        <Hidden only="xs">
            <SideMenu/>
        </Hidden>
        <span style={{position:"absolute",marginLeft:"52vw"}}>{errMsg}</span>
        <div style={{marginLeft:"50%",marginTop:"20%"}}>
            <input type="radio" onClick={()=>{setCodCheck(true);setOnlineCheck(false)}} id="cod" name="payment" value="cod"/>
            <label for="cod">Cash On Delivery</label><br/>
            {codCheck?<Button variant="contained" onClick={placeOrder}>Place Order</Button>:""}<br/>
            <input type="radio" onClick={()=>{setCodCheck(false);setOnlineCheck(true)}} id="online" name="payment" value="online"/>
            <label for="online">Pay Online</label><br/>
            {onlineCheck?<Stripe placeOrder={placeOrder}/>:""}
        </div>

    </div>
    )
}
