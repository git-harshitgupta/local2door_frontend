import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
function Stripe(){
    const [price,setPrice]=useState(1000);
    function handleToken(token){
        console.log({token});
    }
    
    return(
        <div>
            <StripeCheckout
            stripeKey="pk_test_51JOMXqSG9o0wUDPLIxcbZsquuAbroglesJ0RsGZEq7W3hTCjlzd5zjjWQbunwEB2VhP5dOwefqEEBkf6GyyOoM0l00dGojaivV"
            token={handleToken}
            amount={price}
            currency="inr"
            />
        </div>
    );

}
export default Stripe;