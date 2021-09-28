import { Hidden } from "@material-ui/core";
import ShopkeeperNavBar from '../NavBar/ShopkeeperNavBar';
import { useHistory } from "react-router"
import MenuItem from './MenuItem'
import ApiService from "../Service/ApiService";
import { useEffect,useState } from "react";


function ShopkeeperHome(){
    const [shopName, setShopName] = useState();
    const [openClose,setOpenClose] = useState("CLOSED");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
        ApiService.getShopName().then((resp)=>{
            setShopName(resp.data);
        })
        ApiService.openCloseStore().then((resp)=>{
            setOpenClose(resp.data);
        })
    },[shopName])

    const openCloseHandler=()=>{
        ApiService.openCloseStore().then((resp)=>{
            setOpenClose(resp.data);
        })
    }
    
    

    
    return(
        <div>
            
            <ShopkeeperNavBar/>
            
            <Hidden only="xs">
            <h3 style={{marginLeft:"44vw"}}>{shopName}</h3>
            <h4 style={{marginLeft:"46vw"}}>{openClose}</h4>
            </Hidden>
            <Hidden only={['lg','md','sm','xl']}>
            <h4 style={{marginLeft:"37vw"}}>{shopName}</h4>
            <h4 style={{marginLeft:"39vw"}}>{openClose}</h4>
            </Hidden>
            <MenuItem function={openCloseHandler}/>

        </div>
    );
}
export default ShopkeeperHome;