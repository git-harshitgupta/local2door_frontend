import { Grid } from "@material-ui/core";
import OrderCard from "./OrderCard";

function ShopkeeperOrder(){
    return(
        <div>
            <Grid container>
                <Grid container item sm={3} xs={0}></Grid>
                <Grid container item sm={6} xs={12}>
                    <OrderCard/>
                </Grid>
                <Grid container sm={3} xs={0}></Grid>
            </Grid>
        </div>
    );
}
export default ShopkeeperOrder;