import ShopkeeperNavBar from "../NavBar/ShopkeeperNavBar";

import FormProductItem from "./FormProductItem";
import { useHistory } from 'react-router-dom'
import { useEffect } from "react";
function UpdateProductItem(){
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    
    return(
        <div>
            <ShopkeeperNavBar/>
            <FormProductItem/>        
        </div>
    );
}
export default UpdateProductItem;