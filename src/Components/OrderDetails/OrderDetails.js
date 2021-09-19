import { Grid } from "@material-ui/core";
import ItemCard from "../ItemList/ItemCard";
import OrderItemCard from "./OrderItemCard";


function OrderDetails(){
    return(
        <div>
            <Grid container>
                <Grid item  sm={2}><OrderItemCard/></Grid><Grid item  sm={2}><OrderItemCard/></Grid><Grid item  sm={2}><OrderItemCard/></Grid><Grid item  sm={2}><OrderItemCard/></Grid><Grid item  sm={2}><OrderItemCard/></Grid>
            
            </Grid>
        
        
        
        
        </div>
    );
}
export default OrderDetails;