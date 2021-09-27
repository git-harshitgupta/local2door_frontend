import React from 'react'
import ShopkeeperOrderHistory from './ShopkeeperOrderHistory'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
export const ShopkeeperOrderHistroyController = () => {
    const history=useHistory();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return (
        <div>
            <ShopkeeperOrderHistory/>
        </div>
    )
}
