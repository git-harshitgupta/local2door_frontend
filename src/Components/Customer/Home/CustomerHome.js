import React from 'react'
import Home from './Home'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
export const CustomerHome = () => {
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null){
            history.push("/error")
        }
    }, [])
    return (
        <div>
            <Home/>
        </div>
    )
}
