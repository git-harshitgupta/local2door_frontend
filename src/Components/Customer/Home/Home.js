import { Grid,Hidden,makeStyles } from "@material-ui/core";
import Settings from "../../Setting/Setting";
import ItemList from "../../ItemList/ItemList";
import CustomerNavBar from "../../NavBar/CustomerNavBar";
import CustomerNavbar from "../../NavBar/CustomerNavBar";
import Navbar from "../../NavBar/Navbar";
import SideMenu from "../../NavBar/SideMenu";
import OrderDetails from "../../OrderDetails/OrderDetails";
import PhostHolder from "../../Timeline/PhostHolder";
import ShopList from "../ShopList/ShopList";
import Cart from "../../Cart/Cart"
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
function Home(){
    const classes=useStyles();
    return(
        <div>
            <CustomerNavBar/>
            <Hidden only="xs">
                <SideMenu/>
            </Hidden>
            <Hidden only='xs'>
            <div className={classes.shopList}>
            {/* <ShopList/><ShopList/><ShopList/> */}
            {/* <PhostHolder/> */}
            {/* <OrderDetails/> */}
            {/* <Settings/> */}
            <Cart/>
            </div>
            </Hidden>
            <Hidden only={["sm","lg","md","xl"]}>
                <div className={classes.shopList}>
               {/* <ItemList/> */}
               {/* <PhostHolder/> */}
               {/* <OrderDetails/> */}
                {/* <ShopList className={classes.hover}/><ShopList /><ShopList /><ShopList /> */}
                {/* <Settings/> */}
                <Cart/>
                </div>
            </Hidden>           

        </div>
    );
}
export default Home;