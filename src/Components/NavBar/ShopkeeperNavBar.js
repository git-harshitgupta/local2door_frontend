import React, { useState } from 'react';
import logo from '../Files/logo.png'
import  * as AiIcons  from "react-icons/ai";
import './Navbar.css';
import { useHistory } from 'react-router';
import { AppBar,Toolbar, IconButton } from '@material-ui/core';
import ApiService from '../Service/ApiService';


function ShopkeeperNavBar(){
    const history = useHistory();
    const logoutButton=()=>{
        
        ApiService.closeStore().then((resp)=>{
            history.push("/")
            localStorage.clear();
        })
        
    }
    const settingButton=()=>{
        
        ApiService.closeStore().then((resp)=>{
            history.push("/shopkeeper/setting")
            
        })
        
    }
    return (
        <>
        <AppBar position="sticky" style={{backgroundColor:"#FFC107"}}>
            
            <Toolbar>

                <img onClick={()=>{history.push("/shopkeepermenu")}} src={logo} style={{width:"60px",marginRight:"80%"}}/>
                
                <IconButton onClick={settingButton} className="settingIcon" style={{paddingLeft:"0px",position:"absolute",marginLeft:"77vw"}}>
                    <AiIcons.AiFillSetting />
                </IconButton>
                <IconButton onClick={logoutButton} className="logoutIcon" style={{paddingLeft:"0px"}}>
                    <AiIcons.AiOutlineLogout />
                </IconButton>
            </Toolbar>
        </AppBar>
        
    </>
    );
}

export default ShopkeeperNavBar;