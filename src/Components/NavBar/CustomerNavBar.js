import logo from '../Files/logo.png'
import  * as AiIcons  from "react-icons/ai";
import './Navbar.css';
import { AppBar,Toolbar,Hidden, IconButton } from '@material-ui/core';
import Navbar from './Navbar';
import * as FaIcons from "react-icons/fa";
import { Link,useHistory } from 'react-router-dom';

function CustomerNavBar(){
    const histroy=useHistory();
    const logoutButton=()=>{
        localStorage.clear();
    }

    return (
        <div>
        <AppBar position="sticky" style={{backgroundColor:"pink"}}>
            
            <Toolbar>
            <Hidden only={["sm","md","lg","xl"]}>
                <Navbar/>
            </Hidden>
                <img src={logo} onClick={()=>{histroy.push("/customermenu")}} style={{width:"60px",marginRight:"80%"}}/>
                <Hidden only={'xs'}>
                <Link to="/"  style={{textDecoration:"none",color:"black"}}>
                <IconButton onClick={logoutButton} style={{paddingLeft:"0px"}}>
                    <AiIcons.AiOutlineLogout className="logoutIcon" style={{marginLeft:"-2vw",position:"absolute"}}/>
                </IconButton>
                </Link>
                <Link to="/customer/setting" style={{textDecoration:"none",color:"black"}}>
                <IconButton style={{paddingLeft:"0px"}}>
                    <AiIcons.AiFillSetting className="settingIcon"/>
                </IconButton>
                </Link>
                <Link to="/customer/cart" style={{textDecoration:"none",color:"black"}}>
                <IconButton style={{paddingLeft:"0px"}}>
               
                <FaIcons.FaShoppingCart className="cartIcon"/>
                
                </IconButton>
                </Link>
                </Hidden>
                <Hidden only={['sm','md','xl','lg']}>
                <Link to="/customer/setting" style={{textDecoration:"none",color:"black"}}>
                <IconButton className='settingIconPhone' style={{paddingLeft:"0px",position:"absolute",marginLeft:"77vw"}}>
                    <AiIcons.AiFillSetting />
                </IconButton>
                </Link>
                <Link to="/customer/cart" style={{textDecoration:"none",color:"black"}}>
                <IconButton className='cartIconPhone' style={{paddingLeft:"0px",position:"absolute",marginLeft:"-24px",marginTop:"-24px"}}>
                
                <FaIcons.FaShoppingCart />
                </IconButton>
                </Link>
                
                <Link to="/" style={{textDecoration:"none",color:"black"}}>
                <IconButton onClick={logoutButton} style={{paddingLeft:"0px",marginTop:"-9vh",marginLeft:"-20vw",position:"absolute"}}>
                    <AiIcons.AiOutlineLogout />
                </IconButton>
                </Link>
                </Hidden>
            </Toolbar>
        </AppBar>
        
    </div>
    );
}

export default CustomerNavBar;