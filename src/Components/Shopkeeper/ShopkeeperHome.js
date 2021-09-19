import { Grid,Hidden,makeStyles } from "@material-ui/core";
import ShopkeeperNavBar from '../NavBar/ShopkeeperNavBar';
import ShopkeeperTimeline from "../Timeline/ShopkeeperTimeline";
import ShopkeeperOrder from "../ShopkeeperOrder/ShopkeeperOrder"
import ProductList from "../ShopkeeperOrder/ProductList";
import MenuItem from './MenuItem'
import ApiService from "../Service/ApiService";
import { useEffect,useState } from "react";
import axios from "axios";
function ShopkeeperHome(){
    const [shopName, setShopName] = useState();
    const token='Bearer '+localStorage.getItem("jswtoken");
    useEffect(() => {
        axios.get("http://localhost:8080/local2door/shopkeeper?authorization="+token,{
            headers:{
                "Authorization":token
            }
        }).then((resp)=>{
            console.log(resp);
        })
    })
    
    const useStyles=makeStyles({
        sideMenu:{
            display:'flex',
            flexDirection:'column',
            position:'absolute',
            left:'0px',
            width:'15vw',
            height: '-webkit-fill-available',
            backgroundColor:'#3F51B5'
        },
        shopList:{
            width:'100vw',
            marginLeft:'30%',
            marginTop:'2px',
            
        },
        phoneWidth:{
            width:'100px'
        },
    
    
    })

    const classes=useStyles();
    return(
        <div>
            <ShopkeeperNavBar/>
            <MenuItem/>

        </div>
    );
}
export default ShopkeeperHome;