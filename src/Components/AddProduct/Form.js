import { Grid,TextField,Button } from "@material-ui/core";
import { useState } from "react";
import './AddProduct.css'
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ApiService from '../Service/ApiService'
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Form(){
    
    
    const [quantity,setQuantity]=useState();
    const [productName,setProductName]=useState();
    const [productPrice,setProductPrice]=useState();
    const [nameCheck,setNameCheck]=useState(true);
    const [priceCheck,setPriceCheck]=useState(true);
    const [quantityCheck,setQunantityCheck]=useState(true);
    const [productUnit,setProductUnit]=useState();
    const [checkUnit,setCheckUnit]=useState(true);
    const history = useHistory();


    

    const nameHandler=(e)=>{
        if(e.length>0){
            setProductName(e);
            setNameCheck(true);
        }
        else{
            setNameCheck(false)
        }
    }
    const priceHandler=(e)=>{
        if(e.length>0){
            setProductPrice(e);
            setPriceCheck(true);
        }
        else{
            setPriceCheck(false)
        }
    }
    const quantityHandler=(e)=>{
        if(e.length>0){
            setQuantity(e);
            setQunantityCheck(true);
        }
        else{
            setQunantityCheck(false)
        }
    }
    const unitHandler=(e)=>{
        console.log(e);
        setProductUnit(e);
        setCheckUnit(true);
    }

    const buttonHandler=()=>{
        if(productName==null){
            setNameCheck(false)
        }else if(productPrice==null){
            setPriceCheck(false)
        }else if(quantity==null){
            setQunantityCheck(false)
        }else if(productUnit==null){
            setCheckUnit(false);
        }else{
            const product={
                productName:productName,
                productUnit:productUnit,
                productQuantity:quantity,
                productPrice:productPrice,
                
            }
            ApiService.addProduct(product).then((resp)=>{
                toast.success('Product added successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                history.push("/shopkeepermenu")
            });
            

        }
    }

    

    return(
        <div style={{marginTop:"10%"}}>
            <Grid container  alignItem="center">
                
                
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid  item sm={6} xs={12}>
                    {nameCheck?<TextField defaultValue={productName} style={{width:"100%",marginLeft:"10px",marginTop:"18px"}} onChange={(e)=>nameHandler(e.target.value)} label="Product Name" />:
                    <TextField
                    error
                    style={{width:"100%",marginLeft:"10px",marginTop:"18px"}}
                    label="Product Name"
                    defaultValue={productName}
                    helperText="Please enter a Product Name"
                    onChange={(e)=>nameHandler(e.target.value)}
                  />
                    }
                    
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid><Grid item sm={3} xs={0}>
                </Grid>
                <Grid item sm={3} xs={6}>
                {priceCheck?<TextField type="number" defaultValue={productPrice} style={{width:"100%",marginLeft:"10px",marginTop:"18px"}} onChange={(e)=>priceHandler(e.target.value)} label="Product Price" />:
                    <TextField
                    error
                    type="number"
                    style={{width:"100%",marginLeft:"10px",marginTop:"18px"}}
                    label="Product Price"
                    defaultValue={productPrice}
                    helperText="Please enter Product Price"
                    onChange={(e)=>priceHandler(e.target.value)}
                  />
                    }
                </Grid>
                <Grid item sm={3} xs={6}>
                <div style={{display:"absolute",marginTop:"28px"}}>
                    <span style={{fontSize:"35px"}}>/</span>
                    <input type="radio" id="piece" onChange={(e)=>unitHandler(e.target.value)} name="quantity" value="UNIT"/>
                    <label for="piece">Piece</label>
                    <input type="radio" id="kg" name="quantity" onChange={(e)=>unitHandler(e.target.value)} value="KG"/>
                    <label for="kg">KG</label>
                    <input type="radio" id="litre" name="quantity" onChange={(e)=>unitHandler(e.target.value)} value="LITRE"/>
                    <label for="litre">Litre</label></div>
                    {checkUnit?"":<span style={{color:"red"}}>Please select the unit</span>}
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
                
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid  item sm={6} xs={12}>
                
                {quantityCheck?<TextField type="number" defaultValue={quantity} style={{width:"100%",marginLeft:"10px",marginTop:"18px"}} onChange={(e)=>quantityHandler(e.target.value)} label="Product Qunatity" />:
                    <TextField
                    error
                    type="number"
                    style={{width:"100%",marginLeft:"10px",marginTop:"18px"}}
                    label="Product Qunatity"
                    defaultValue={quantity}
                    helperText="Please enter Product Quantity"
                    onChange={(e)=>quantityHandler(e.target.value)}
                  />
                    }</Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid style={{marginTop:"15px",marginLeft:"10px"}} item sm={2} xs={12}>
                <Button style={{paddingLeft:"0px",width:"100%"}} onClick={buttonHandler} variant="contained">Add Product</Button>
                </Grid><br/>
                <Grid style={{marginTop:"15px",marginLeft:"10px"}} item sm={2} xs={12}>
                    <Link to="/shopkeepermenu" style={{textDecoration:"none"}}>
                <Button style={{paddingLeft:"0px",width:"100%"}} onClick={buttonHandler} variant="contained">Home</Button>
                </Link>
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
            </Grid>
        </div>

    )
}
export default Form;