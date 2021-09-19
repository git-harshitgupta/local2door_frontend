import { Grid } from "@material-ui/core";
import timeline from '../Files/timeline.png'
import orderhistory from '../Files/orderhistroy.png'
import orders from '../Files/orders.png'
import './Shopkeeper.css'
function MenuItem(){
    return(
        <div className="menuItemContainer">
            <Grid container  spacing={2}>
                <Grid item container direction="column" sm={4} xs={12} alignContent="center" className="menuItem">
                    <img src={timeline}className="imageSize"/>
                    <span>TIMELINE</span>
                </Grid>
                <Grid item container direction="column" sm={4} xs={12} alignContent="center" className="menuItem">
                    <img src={orderhistory}className="imageSize"/>
                    <span style={{marginLeft:"-1px"}}>ORDER HISTORY</span>
                </Grid>
                <Grid item container direction="column" sm={4} xs={12} alignContent="center" className="menuItem">
                    <img src={orders}className="imageSize"/>
                    <span >ORDERS</span>
                </Grid>
            </Grid> 
        </div>
    );
}
export default MenuItem;