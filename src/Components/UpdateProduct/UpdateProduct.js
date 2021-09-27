import ShopkeeperNavBar from "../NavBar/ShopkeeperNavBar";
import FormProductItem from "./FormProductItem";
import UpdateTable from './UpdateTable'
import { useHistory } from 'react-router-dom'
import { useEffect } from "react";
function UpdateProduct() {
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return(
        <div>
            <ShopkeeperNavBar/>
            <UpdateTable/>
        </div>
    );
}
export default UpdateProduct;