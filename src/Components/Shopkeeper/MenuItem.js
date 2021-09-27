import { Grid } from "@material-ui/core";
import orderhistory from '../Files/orderhistroy.png'
import orders from '../Files/orders.png'
import addproduct from '../Files/addproduct.png'
import update from '../Files/update.png'
import openclose from '../Files/openclose.png'
import { useEffect, useState } from "react";
import './Shopkeeper.css'
import { useHistory } from "react-router";
import ApiService from "../Service/ApiService";

function MenuItem(props){
    const [count,setCount]=useState(1);
    const [newOrder,setNewOrder]=useState(false);
    const history=useHistory();
    useEffect(() => {
    
        ApiService.checkOrder().then((resp)=>{
            if(resp.data){
                setNewOrder(true);
            }
            else{
                console.log("done")
                setTimeout(() => {
                    setCount(count+1)    
                }, 30000);
                
            }
        })
    }, [count])
    return(
        <div className="menuItemContainer">
            <Grid container  spacing={2}>
                <Grid item container direction="column" sm={6} xs={12} alignContent="center" className="menuItem">
                    <img onClick={props.function} src={openclose}className="imageSize"/>
                    <span style={{marginLeft:"45px"}}>OPEN/CLOSE</span>
                </Grid>
                
                <Grid item container direction="column" sm={6} xs={12} alignContent="center" className="menuItem">
                    <img onClick={()=>history.push("/shopkeeper/orderhistory")} src={orderhistory}className="imageSize"/>
                    <span  style={{marginLeft:"10px"}}>ORDER HISTORY</span>
                </Grid>
                {newOrder?<Grid item  container direction="column" sm={6} xs={12} alignContent="center" className="newOrder">
                    <img onClick={()=>history.push("/shopkeeper/orders")} src={orders}className="imageSize"/>
                    <span style={{marginLeft:"30px"}}>ORDERS</span>
                </Grid>:<Grid item  container direction="column" sm={6} xs={12} alignContent="center" className="menuItem">
                    <img onClick={()=>history.push("/shopkeeper/orders")} src={orders}className="imageSize"/>
                    <span style={{marginLeft:"30px"}}>ORDERS</span>
                </Grid>}
                
                
                <Grid item container direction="column" sm={6} xs={12} alignContent="center" className="menuItem">
                    <img onClick={()=>history.push("/shopkeeper/addproduct")} src={addproduct}className="imageSize"/>
                    <span >ADD PRODUCT</span>
                </Grid>
                
                
                <Grid item sm={3} xs={0}></Grid>
                <Grid item container direction="column" sm={6} xs={12} alignContent="center" className="menuItem">
                    <img onClick={()=>history.push("/shopkeeper/updateproduct")} src={update}className="imageSize"/>
                    <span >UPDATE PRODUCT</span>
                </Grid>
               
                
            </Grid> 
        </div>
    );
}
export default MenuItem;