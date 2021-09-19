import logo from './logo.svg';
import './App.css';

import {Grid} from '@material-ui/core'

import React, { useEffect, useState } from "react";

import Login from './Components/Login/Login'

import {BrowserRouter,Route,Link} from 'react-router-dom'
import CustomerOrShopkeeper from './Components/SignUp/CustomerOrShopkeeper';
import SignUpCustomer from './Components/SignUp/SignUpCustomer';
import SignUpShopKeeper from './Components/SignUp/SignUpShopKeeper';
import MapBox from './Components/Maps/MapBox';
import Stripe from './Components/Payment/Stripe';
import ShopkeeperTimeline from './Components/Timeline/ShopkeeperTimeline';
import ShopkeeperHome from './Components/Shopkeeper/ShopkeeperHome';
import Home from './Components/Customer/Home/Home'
function App(){
  
  return (
    <BrowserRouter>
      <div>
       
        <Route exact path="/">
        <Login/>
        </Route>
        <Route exact path='/signup'>
          <CustomerOrShopkeeper/>
        </Route>
       
        <Route path='/signup/customer'>
          <SignUpCustomer/>
        </Route>
        <Route path='/signup/shopkeeper'>
          <SignUpShopKeeper/>
        </Route>
        <Route path='/signup/location'>
          <MapBox/>
        </Route>
        <Route path='/shopkeermenu'>
          <ShopkeeperHome/>
        </Route>

      </div>
    </BrowserRouter>
    );
  }


  
export default App;
