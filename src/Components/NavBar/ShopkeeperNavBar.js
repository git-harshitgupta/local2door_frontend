import React, { useState } from 'react';
import logo from '../Files/logo.png'
import { CustomerSiderData } from './CustomerSiderData';
import  * as AiIcons  from "react-icons/ai";
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Grid,AppBar,Toolbar,Hidden, Typography, IconButton } from '@material-ui/core';
import Navbar from './Navbar';
import * as FaIcons from "react-icons/fa";

function ShopkeeperNavBar(){
    return (
        <>
        <AppBar position="sticky" style={{backgroundColor:"#FFC107"}}>
            
            <Toolbar>
            <Hidden only={["sm","md","lg","xl"]}>
                <Navbar/>
            </Hidden>
                <img src={logo} style={{width:"60px",marginRight:"80%"}}/>
                <Hidden only={'xs'}>
                <IconButton style={{paddingLeft:"0px"}}>
                    <AiIcons.AiFillSetting className="settingIcon"/>
                </IconButton>
                </Hidden>
                <Hidden only={['sm','md','xl','lg']}>
                <IconButton className='settingIconPhone' style={{paddingLeft:"0px"}}>
                    <AiIcons.AiFillSetting />
                </IconButton>
                <IconButton className='cartIconPhone' style={{paddingLeft:"0px"}}>
                    <FaIcons.FaShoppingCart />
                </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
        
    </>
    );
}

export default ShopkeeperNavBar;