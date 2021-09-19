import {Grid,Button} from '@material-ui/core';
import CardProductCard from './CartProductCard';
import './Cart.css';
function Cart(){
    return(
        <div>
            <Grid container direction='column' sm={12}>
                <CardProductCard/>
                <span>Total Price</span>
                <Grid container item sm={3} xs={12}>
                <Button variant="contained" style={{paddingLeft:"0px"}}color="primary">Place Order</Button>
                </Grid>
            </Grid>
            
        </div>
    );
}
export default Cart;