import React from 'react'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import OrderProductDetails from './OrderProductDetails';
export const OrderProductDetailsController = () => {
    const history=useHistory();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return (
        <div>
          <OrderProductDetails/>  
        </div>
    )
}
