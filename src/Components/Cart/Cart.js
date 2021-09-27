import {Button,Hidden} from '@material-ui/core';

import './Cart.css';
import CustomerNavBar from '../NavBar/CustomerNavBar';
import SideMenu from '../NavBar/SideMenu'
import { CartContext } from "../Context/CartContext";
import { useContext, useState,useEffect} from "react";
import {useHistory} from 'react-router'
function Cart(){
    
    const history = useHistory();
    const [cart,setCart]=useContext(CartContext);
    const [cartProducts,setCartProducts]=useState(1);
    const [totalPrice,setTotalPrice]=useState();
    const [warning,setWarning]=useState(false);
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
        var totalPriceTemp=0;
        for(let i=0;i<cart.length;i++){
            totalPriceTemp+=parseInt(cart[i].productTotalPrice);
            console.log(totalPriceTemp)
        }
        setTotalPrice(totalPriceTemp);
        console.log(totalPrice)
        forceUpdate();
    }, [])
    const changeProductQunatity=(value,index)=>{
        if(value>=0){
        console.log(value+" "+index)
        var productTemp=cart;
        productTemp[index].productQunatity=value;
        productTemp[index].productTotalPrice=productTemp[index].productPrice*value;
        setCart(productTemp)
        var totalPriceTemp=0;
        for(let i=0;i<cart.length;i++){
            totalPriceTemp+=parseInt(cart[i].productTotalPrice);
            console.log(totalPriceTemp)
        }
        setTotalPrice(totalPriceTemp);
        forceUpdate();
        }
        else{
            var productTemp=cart
            productTemp.splice(index,1)
            setCart(productTemp)
            var totalPriceTemp=0;
            for(let i=0;i<cart.length;i++){
                totalPriceTemp+=parseInt(cart[i].productTotalPrice);
                console.log(totalPriceTemp)
            }
        setTotalPrice(totalPriceTemp);
            forceUpdate();
        }
    }
    const forceUpdate=()=>{
        setCartProducts(cartProducts+1)
    }
    const checkOutButtonHandler=()=>{
        if(totalPrice==0){
            setWarning(true)
        }
        else{
            localStorage.setItem("totalPrice",totalPrice)
            history.push("/customer/checkout")
        }
    }
    return(
        <div>

            <CustomerNavBar/>
            <Hidden only="xs">
                <SideMenu/>
            </Hidden>
            <Hidden only="xs">
            <h2 className="text-center">Cart Details</h2>
                {warning?<span style={{color:"red",marginLeft:"42%"}}>Please add item to the cart first</span>:""}
                <table className="table table-striped" style={{marginLeft:"16%",width:"80%"}}>
                    <thead>
                        <tr>
                            
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            
                        {cart.map((products,index)=>
                            <tr className="hidden" >
                            <td>{products.productName}</td>
                            <td>{products.productPrice}/{products.productUnit}</td>
                            <td><input type="number" style={{width:"10%"}} onChange={(e)=>{changeProductQunatity(e.target.value,index)}} defaultValue={products.productQunatity}/> </td>
                            <td>{products.productTotalPrice}</td>
                        </tr>
                        )}
                    </tbody>
                    <tr><td><span style={{fontSize:"20px",fontWeight:"bold"}}>Total Price : {totalPrice}</span></td></tr>
                </table>
                
                <Button variant="contained" onClick={checkOutButtonHandler} style={{paddingLeft:"0px",marginLeft:"17%"}}color="primary">Place Order</Button>
                
            </Hidden>
            <Hidden only={["sm","lg","md","xl",]}>
            <h2 className="text-center">Cart Details</h2>
            {warning?<span style={{color:"red",marginLeft:"26%"}}>Please add item to the cart first</span>:""}
                <table className="table table-striped" style={{marginLeft:"2%",width:"100%"}}>
                    <thead>
                        <tr>
                            
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            
                        {cart.map((products,index)=>
                            <tr className="hidden" >
                            <td>{products.productName}</td>
                            <td>{products.productPrice}/{products.productUnit}</td>
                            <td><input type="number" style={{width:"20%"}} onChange={(e)=>{changeProductQunatity(e.target.value,index)}} defaultValue={products.productQunatity}/> </td>
                            <td>{products.productTotalPrice}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            <div>   
                <span style={{fontSize:"20px",fontWeight:"bold"}}>Total Price : {totalPrice}</span>
                <br/>
                
                <Button variant="contained" onClick={checkOutButtonHandler} style={{marginLeft:"4%",paddingLeft:"0px",width:"90%"}}color="primary">CheckOut</Button>
                
            </div>
            
            </Hidden>
            
        </div>
    );
}
export default Cart;