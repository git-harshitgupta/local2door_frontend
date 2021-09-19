import {Grid,Button,Hidden, IconButton} from '@material-ui/core'
import { useState } from 'react';
import './Cart.css'
import defaultIcon from '../Files/logo.png'
import * as RiIcons from 'react-icons/ri'
function CardProductCard(){
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
        <div>
        <Hidden only={'xs'}>
        <div className="root">
            <Grid container sm={12} >
                <Grid item container sm={4} >
                    <img className='cardImage' src={defaultIcon}  />
                </Grid>
                <Grid container direction="column" sm={3} >
                    <Grid item container >
                        <span className="productName">Product Name</span> 
                    </Grid>
                    <Grid item container >
                    <div className="quantityContainer">                
                        <button className='quantityButton' onClick={increaseQuantity} >+</button>
                        <input className='quantityBox' style={{width:"25px"}} type="text" onChange={(e)=>quantityMention(e.target.value)} value={quntity}/>
                        <button className='quantityButton' onClick={decreaseQuantity} >-</button>
                    </div>
                    </Grid>
                </Grid>
                <Grid container item sm={3} >
                    <span className='price'>Price</span>
                </Grid>
                <Grid container item sm={2} >
                    <IconButton>
                    <RiIcons.RiDeleteBin7Fill/>
                    </IconButton>
                </Grid>
            </Grid>
            
        
        </div>
        </Hidden>
        <Hidden only={['sm','md','lg','xl']}>
        <div className="rootPhone">
            <Grid container xs={12}>
                <Grid item container xs={4}>
                    <img className='cardImage' src={defaultIcon}  />
                </Grid>
                <Grid container direction="column" xs={3}>
                    <Grid item container >
                        <span className="productName">Product Name</span> 
                    </Grid>
                    <Grid item container >
                    <div className="quantityContainer">                
                        <button className='quantityButton' onClick={increaseQuantity} >+</button>
                        <input className='quantityBox' style={{width:"25px"}} type="text" onChange={(e)=>quantityMention(e.target.value)} value={quntity}/>
                        <button className='quantityButton' onClick={decreaseQuantity} >-</button>
                    </div>
                    </Grid>
                </Grid>
                <Grid container item xs={3}>
                    <span className='price'>Price</span>
                </Grid>
                <Grid container item xs={2}>
                    <IconButton>
                    <RiIcons.RiDeleteBin7Fill/>
                    </IconButton>
                </Grid>
            </Grid>
            
        
        </div>
        </Hidden>
        
        </div>
    );
}
export default CardProductCard;