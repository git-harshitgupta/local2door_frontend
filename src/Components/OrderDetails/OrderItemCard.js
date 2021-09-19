import { Grid,makeStyles} from "@material-ui/core";
import logo from '../Files/logo.png'
const useStyle=makeStyles({
    box:{
        marginTop:'5px',
        width:"100%",
        boxShadow:"1px 1px 3px grey"
    },
    itemImage:{
        width:"100%",
        padding:"5px 5px"
    }
})

function OrderItemCard(){
    const classes=useStyle();
    return(
        <div>
            <Grid container className={classes.box} direction="column">
                <Grid item container >
                    <img src={logo} className={classes.itemImage}/>
                </Grid>
                <Grid item container  >
                    <span>Product Name</span>                
               
                </Grid>
                <Grid item container  >
                    <span> Quantity</span>                
               
                </Grid><Grid item container >
                    <span>Price</span>                
               
                </Grid>
            </Grid>
        </div>
    );
}
export default OrderItemCard;