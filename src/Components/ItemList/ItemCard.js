import { Card, Grid,makeStyles,CardMedia,CardContent,Typography, Icon, Hidden,Button} from "@material-ui/core";
import { useState } from "react";
import defaultIcon from "../Files/logo.png"
const useStyles = makeStyles((theme) => ({
    root: {
        height:"125px",
        width:'50%',
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
        textDecoration:"underline"
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
function ItemCard(){
    const classes=useStyles();
    const [buy,setBuy]=useState(false);
    const [quntity,setQuntity]=useState(1);
    const hideBuy=()=>setBuy(!buy);
    const increaseQuantity=()=>setQuntity(quntity+1);
    const decreaseQuantity=()=>{
        if(quntity-1==0)
        setBuy(false);
        else
        setQuntity(quntity-1)
    };
    function quantityMention(quantity){
        if(quntity==0){
            setQuntity(1);
            setBuy(false);
        }
        else
        setQuntity(quantity);
    }
    return(
        <div className={classes.hover}>

        <Hidden only={"xs"}>
        <Grid container className={classes.root}>
            
            <Grid container item sm={4}>
            
                <div  className={classes.cardStyle}>
                    <img src={defaultIcon}  className={classes.cardImage}/>
                </div>
                
            </Grid>
            <Grid container item sm={5}  direction="column">
               <span className={classes.productName}>Product Name</span>
               <span className={classes.productDetails}>Price</span>
               <span className={classes.productDetails}>Quantity</span>
            </Grid>
            <Grid container item sm={3}>
                <div>
               

                    {buy? 
                        <div className={classes.quantityButton}>                
                        <button onClick={increaseQuantity} >+</button>
                        <input style={{width:"25px"}} type="text" onChange={(e)=>quantityMention(e.target.value)} value={quntity}/>
                        <button onClick={decreaseQuantity} >-</button>
                        </div>
                    :  
                    <Button variant="contained" onClick={hideBuy} color="primary" className={classes.buyButton}>BUY</Button>}
                
                </div>
            </Grid>
            
        </Grid>
        </Hidden>
        <Hidden only={["sm","lg","md","xl"]}>
        <Grid container className={classes.rootPhone}>
            
            <Grid container item  xs={4}>
            
                <div  className={classes.cardStyle}>
                    <img src={defaultIcon}  className={classes.cardImage}/>
                </div>
                
            </Grid>
            <Grid container item  xs={5} direction="column">
               <span className={classes.productName}>Shop Name</span>
               <span className={classes.productDetails}>Quatity</span>
               <span className={classes.productDetails}>Price</span>
            </Grid>
            <Grid container item xs={3}>
                <div>
                {buy? 
                        <div className={classes.quantityButton}>                
                        <button onClick={increaseQuantity} >+</button>
                        <input style={{width:"25px"}} type="text" onChange={(e)=>quantityMention(e.target.value)} value={quntity}/>
                        <button onClick={decreaseQuantity} >-</button>
                        </div>
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