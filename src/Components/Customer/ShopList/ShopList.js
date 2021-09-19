import { Card, Grid,makeStyles,CardMedia,CardContent,Typography, Icon, Hidden} from "@material-ui/core";
import defaultIcon from "../../Files/logo.png"
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
        width: '80px',
    marginLeft: '12px',
    marginTop: '16px'
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


function ShopList(){
    const classes = useStyles();
    return(
        <div className={classes.hover}>
            <Hidden only={"xs"}>
            <Grid container className={classes.root}>
                
                <Grid container item sm={4}>
                
                    <div  className={classes.cardStyle}>
                        <img src={defaultIcon}  className={classes.cardImage}/>
                    </div>
                    
                </Grid>
                <Grid container item sm={8}  direction="column">
                   <span className={classes.shopName}>Shop Name</span>
                   <span className={classes.shopAdd}>Addreas</span>
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
                <Grid container item  xs={8} direction="column">
                   <span className={classes.shopName}>Shop Name</span>
                   <span className={classes.shopAdd}>Addreas</span>
                </Grid>
                
            </Grid>
            </Hidden>
        </div>
    );
}
export default ShopList;