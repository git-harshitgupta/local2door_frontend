import React from 'react'
import OrderProductList from './OrderProductList'
import { useHistory } from "react-router";
import { useEffect } from 'react';
 const OrderProductListController = () => {
    const history=useHistory();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return (
        <div>
            <OrderProductList/>
        </div>
    )
}

export default OrderProductListController;