import { useState,useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "../Context/CartContext";
import { useHistory } from "react-router";
function Stripe(props){
    const history=useHistory();
    const [cart,setCart]=useContext(CartContext);
    const [price,setPrice]=useState(parseFloat(localStorage.getItem("totalPrice"))*100);
    
    
    return(
        <div>
            <StripeCheckout
            stripeKey="pk_test_51JOMXqSG9o0wUDPLIxcbZsquuAbroglesJ0RsGZEq7W3hTCjlzd5zjjWQbunwEB2VhP5dOwefqEEBkf6GyyOoM0l00dGojaivV"
            token={props.placeOrder}
            amount={price}
            currency="inr"
            />
        </div>
    );

}
export default Stripe;