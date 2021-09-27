import React, { useEffect } from 'react'
import OrderDetails from './OrderDetails'
import { useHistory } from 'react-router'
export const OrderDetailsController = () => {
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, )
    return (
        <div>
            <OrderDetails/>
        </div>
    )
}
