import React from 'react'
import ShopkeeperOrder from './ShopkeeperOrder'

import { useHistory } from 'react-router'
import { useEffect } from 'react'
export const ShopkeeperOrderController = () => {
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return (
        <div>
            <ShopkeeperOrder/>
        </div>
    )
}
