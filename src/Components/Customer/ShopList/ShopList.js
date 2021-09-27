import { Grid,makeStyles, Hidden} from "@material-ui/core";
import { Link } from "react-router-dom";
import defaultIcon from "../../Files/shopimage.jpg"
const useStyles = makeStyles((theme) => ({
    root: {
        height:"125px",
        width:'50%',
        boxShadow: '1px 1px 5px grey',
        marginTop:'4px',
        marginLeft:'4px',
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
        height: '90px',
        width: '84px',
        borderRadius: '29px',
        boxShadow: '1px 1px 5px grey',
        marginTop: '15px',
        marginLeft: '15px'
    },
    shopName:{
        fontFamily:"Montserrat",
        fontSize: "28px",
        marginTop: "23px",
        textDecoration:"underline"
    },
    shopAdd:{
        fontFamily:"Montserrat"
    },
   
    
    
}));


function ShopList(props){
    const imageUrl="http://localhost:8080/local2door/filehandler/shopkeeper/profile/"+props.data.shopid;
    const shopClickHandler=()=>{
        localStorage.setItem("shopId",props.data.shopid)
    }
    const classes = useStyles();
    return(
        <Link  to='/customer/shopproducts' style={{textDecoration:"none",color:"black"}}>
        <div onClick={shopClickHandler} className={classes.hover}>
            <Hidden only={"xs"}>
            <Grid container className={classes.root}>
                
                <Grid container item sm={4}>
                
                    
                        <img src={imageUrl} alt={defaultIcon}  className={classes.cardImage}/>
                  
                    
                </Grid>
                <Grid container item sm={8}  direction="column">
                   <span className={classes.shopName}>{props.data.shopName}</span>
                   <span className={classes.shopAdd}>{props.data.shopAdd}</span>
                </Grid>
                
            </Grid>
            </Hidden>
            <Hidden only={["sm","lg","md","xl"]}>
            <Grid container className={classes.rootPhone}>
                
                <Grid container item  xs={4}>
                
                <img src={imageUrl} alt={defaultIcon} className={classes.cardImage}/>
                    
                </Grid>
                <Grid container item  xs={8} direction="column">
                   <span className={classes.shopName}>{props.data.shopName}</span>
                   <span className={classes.shopAdd}>{props.data.shopAdd}</span>
                </Grid>
                
            </Grid>
            </Hidden>
        </div>
        </Link>
    );
}
export default ShopList;