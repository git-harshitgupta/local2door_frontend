import React from 'react'
import ShopItem from './ShopItem'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
export const ShopItemController = () => {
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return (
        <div>
            <ShopItem/>
        </div>
    )
}
