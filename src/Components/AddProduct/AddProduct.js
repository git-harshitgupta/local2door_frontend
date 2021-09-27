import ShopkeeperNavBar from "../NavBar/ShopkeeperNavBar";
import Form from './Form'
import { useHistory } from 'react-router-dom'
import { useEffect } from "react";
function AddProduct() {
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return(
        <div>
            <ShopkeeperNavBar/>
            <Form/>
        </div>
    );
}

export default AddProduct;