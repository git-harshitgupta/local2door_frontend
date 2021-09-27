import { Grid,makeStyles, Hidden,Button} from "@material-ui/core";
import { CartContext } from "../Context/CartContext";
import { useContext, useState } from "react";
import defaultIcon from "../Files/logo.png"
const useStyles = makeStyles((theme) => ({
    root: {
        height:"125px",
        width:'100%',
        boxShadow: '1px 1px 5px grey',
        marginTop:'4px',
        marginLeft:'0px',
        "&:hover": {
            backgroundColor: '#E4E5E7',
            
          }

    },
    rootPhone: {
        height:"125px",
        width:'90%',
        boxShadow: '1px 1px 5px grey',
        marginTop:'4px',
        marginLeft:'4px',
        marginRight:'10px',
        "&:hover": {
            backgroundColor: '#E4E5E7',}
        

    },
    cardStyle:{
        width:'100px',
        height:"100px",
        marginTop:"10px",
        marginLeft:"11px",
        boxShadow: '1px 1px 5px grey',
        borderRadius: '28px'
        
    },
    cardImage:{
        width: '80px',
    marginLeft: '12px',
    marginTop: '16px'
    },
    productName:{
        fontFamily:"Montserrat",
        fontSize: "22px",
        marginTop: "23px",
        
    },
    productDetails:{
        fontFamily:"Montserrat"
    },
    buyButton:{
        paddingLeft:"0px",
        marginTop:"41px",
        width:"100%"
    },
    quantityButton:{
        marginTop: '49px'
    }
    
    
    
}));
function ItemCard(props){
    const [cart,setCart]=useContext(CartContext);
    console.log("props data",props)
    const classes=useStyles();
    const [buy,setBuy]=useState(false);
    const hideBuy=()=>{
        console.log("cart value",cart)
        if(buy==false){
            const product={
                productId:props.product.productId,
                productName:props.product.productName,
                productPrice:props.product.productPrice,
                productUnit:props.product.productUnit,
                productQunatity:1,
                productTotalPrice:props.product.productPrice
            }
            setCart(curr=>[...curr,product])
            setBuy(!buy);
        }
        else{
            var products = cart.filter((product)=>{
                return product.productId!=props.product.productId;
            });
            setCart(products);
            setBuy(!buy);
        }
    }
    return(
        <div className={classes.hover}>

        <Hidden only={"xs"}>
        <Grid container className={classes.root}>
            
            <Grid container item sm={2}>
            
                
                
            </Grid>
            <Grid container item sm={5}  direction="column">
               <span className={classes.productName}>{props.product.productName}</span>
               <span className={classes.productDetails}>{props.product.productPrice}/{props.product.productUnit}</span>
               
            </Grid>
            <Grid container item sm={3}>
                <div>
               

                    {buy? 
                        <Button variant="contained" onClick={hideBuy} color="primary" className={classes.buyButton}>REMOVE</Button>
                    :  
                    <Button variant="contained" onClick={hideBuy} color="primary" className={classes.buyButton}>BUY</Button>}
                
                </div>
            </Grid>
            
        </Grid>
        </Hidden>
        <Hidden only={["sm","lg","md","xl"]}>
        <Grid container className={classes.rootPhone}>
            
            <Grid container item  xs={3}>
            
                
                
            </Grid>
            <Grid container item  xs={5} direction="column">
            <span className={classes.productName}>{props.product.productName}</span>
               <span className={classes.productDetails}>{props.product.productPrice}/{props.product.productUnit}</span>
               
            </Grid>
            <Grid container item xs={3}>
                <div>
                {buy? 
                        <Button variant="contained" onClick={hideBuy} color="primary" className={classes.buyButton}>REMOVE</Button>
                    :  
                    <Button variant="contained" onClick={hideBuy} color="primary" className={classes.buyButton}>BUY</Button>}
                </div>
            </Grid>
            
        </Grid>
        </Hidden>
    </div>
    );
}
export default ItemCard;