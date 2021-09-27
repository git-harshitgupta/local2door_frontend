import React, { Component } from 'react'
import axios from 'axios';
import logo from '../Files/logo.png';
import profilePictureEdit from '../Files/editProfilePicture.png'
import { Grid,TextField,Button,Hidden } from "@material-ui/core";
import ApiService from '../Service/ApiService';
import { Link } from 'react-router-dom';
class UpdateTable extends Component {
        
    constructor(props) {
        super(props)
        this.state = {
            productId:'',
            productName:'',
            productPrice:'',
            productUnit:'',
            productQunatity:'',
            checkName:true,
            checkPrice:true,
            checkUnit:true,
            checkQuntity:true,
            update:""
        }
        this.nameHandler=this.nameHandler.bind(this);
        this.priceHandler=this.priceHandler.bind(this);
        this.quantityHandler=this.quantityHandler.bind(this);
        this.buttonHandler=this.buttonHandler.bind(this);
        
        
    }
    nameHandler=(e)=>{
        if(e.length>0){
            this.setState({productName:e});
            this.setState({checkName:true});
        }
        else{
            this.setState({checkName:false});
            this.setState({productName:e});
        }
    }
    priceHandler=(e)=>{
        if(e.length>0){
            this.setState({productPrice:e});
            this.setState({checkPrice:true});
        }
        else{
            this.setState({checkPrice:false});
            this.setState({productPrice:e});
        }
    }
      quantityHandler=(e)=>{
        if(e.length>0){
            this.setState({productQunatity:e});
            this.setState({checkQuntity:true});
        }
        else{
            this.setState({productQunatity:e});
            this.setState({checkQuntity:false});
        }
    }
     unitHandler=(e)=>{
        console.log(e);
        this.setState({productUnit:e});
        this.setState({checkUnit:false});
    }

     buttonHandler=()=>{
        if(this.state.productName==''){
            this.setState({productName:false});
        }else if(this.state.productPrice==''){
            this.setState({productPrice:false});
        }else if(this.state.productQunatity==''){
            this.setState({checkQuntity:false});
        }else if(this.state.productUnit==''){
            this.setState({checkUnit:false});
        }else{
            const product={
                productId:this.state.productId,
                productName:this.state.productName,
                productUnit:this.state.productUnit,
                productQuantity:this.state.productQunatity,
                productPrice:this.state.productPrice
            }
            ApiService.updateProductItem(product).then((resp)=>{
            
                this.setState({update:"Updated"})
            })
        }
    }

    componentDidMount(){
        this.loadProduct();
    }

    loadProduct() {
        axios.get("http://localhost:8080/local2door/shopkeeper/getproduct",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken"),
                "ProductId":+localStorage.getItem("productId")
            }
        }).then(resp=>{
            console.log(resp.data)
            this.setState({productName: resp.data.productName,
                            productPrice: resp.data.productPrice,
                            productQunatity:resp.data.productQuantity,
                            productUnit:resp.data.productUnit,
                            productId:resp.data.productId})
            console.log(this.state.productName);
        })
    }
    
    render() {
        return (
            <div>
                <span style={{color:"red",marginLeft:"48%"}}>{this.state.update}</span>
            <Grid container  >
                
                
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid  item sm={6} xs={12}>
                    
                    {this.state.checkName?<TextField value={this.state.productName} style={{width:"100%",marginLeft:"10px",marginTop:"18px"}} onChange={(e)=>this.nameHandler(e.target.value)} label="Product Name" />:
                    <TextField
                    error
                    style={{width:"100%",marginLeft:"10px",marginTop:"18px"}}
                    label="Product Name"
                    value={this.state.productName}
                    helperText="Please enter a Product Name"
                    onChange={(e)=>this.nameHandler(e.target.value)}
                  />
                    }
                    
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid><Grid item sm={3} xs={0}>
                </Grid>
                <Grid item sm={3} xs={6}>
                {this.state.checkPrice?<TextField type="number" value={this.state.productPrice} style={{width:"100%",marginLeft:"10px",marginTop:"18px"}} onChange={(e)=>this.priceHandler(e.target.value)} label="Product Price" />:
                    <TextField
                    error
                    type="number"
                    style={{width:"100%",marginLeft:"10px",marginTop:"18px"}}
                    label="Product Price"
                    value={this.state.productPrice}
                    helperText="Please enter Product Price"
                    onChange={(e)=>this.priceHandler(e.target.value)}
                  />
                    }
                </Grid>
                <Grid item sm={3} xs={6}>
                <div style={{display:"absolute",marginTop:"28px"}}>
                    <span style={{fontSize:"35px"}}>/</span>
                    {this.state.productUnit=="UNIT"?<input type="radio" id="piece" checked onChange={(e)=>this.unitHandler(e.target.value)} name="quantity" value="UNIT"/>:
                    <input type="radio" id="piece" onChange={(e)=>this.unitHandler(e.target.value)} name="quantity" value="UNIT"/>}
                    <label for="piece">Piece</label>
                    {this.state.productUnit=="KG"?<input type="radio" id="kg" checked onChange={(e)=>this.unitHandler(e.target.value)} name="quantity" value="KG"/>:
                    <input type="radio" id="kg" onChange={(e)=>this.unitHandler(e.target.value)} name="quantity" value="KG"/>}
                    <label for="kg">KG</label>
                    {this.state.productUnit=="LITRE"?<input type="radio" id="litre" checked onChange={(e)=>this.unitHandler(e.target.value)} name="quantity" value="LITRE"/>:
                    <input type="radio" id="litre" onChange={(e)=>this.unitHandler(e.target.value)} name="quantity" value="LITRE"/>}
                    <label for="litre">Litre</label></div>
                    {this.state.checkUnit?"":<span style={{color:"red"}}>Please select the unit</span>}
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
                
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid  item sm={6} xs={12}>
                
                {this.state.checkQuntity?<TextField type="number" value={this.state.productQunatity} style={{width:"100%",marginLeft:"10px",marginTop:"18px"}} onChange={(e)=>this.quantityHandler(e.target.value)} label="Product Qunatity" />:
                    <TextField
                    error
                    type="number"
                    style={{width:"100%",marginLeft:"10px",marginTop:"18px"}}
                    label="Product Qunatity"
                    value={this.state.productQunatity}
                    helperText="Please enter Product Quantity"
                    onChange={(e)=>this.quantityHandler(e.target.value)}
                  />
                    }</Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
                <Grid item sm={5} xs={0}>
                </Grid>
                <Grid style={{marginTop:"15px",marginLeft:"10px"}} item sm={2} xs={12}>
                <Button style={{paddingLeft:"0px",width:"100%"}} onClick={this.buttonHandler} variant="contained">Update Product</Button>
                <Link to="/shopkeeper/updateproduct" style={{textDecoration:"none"}}>
                <button style={{paddingLeft:"0px",width:"100%",marginTop:"2%"}} className="btn btn-warning">Go Back</button>
                </Link>
                </Grid>
                <Grid item sm={3} xs={0}>
                </Grid>
            </Grid>
        </div>
        );
    }

}

export default UpdateTable;