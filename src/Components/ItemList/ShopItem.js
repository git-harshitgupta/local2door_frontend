import { Component } from "react";
import { Hidden} from '@mui/material'
import CustomerNavBar from "../NavBar/CustomerNavBar";
import SideMenu from "../NavBar/SideMenu";

import ItemList from "./ItemList"
class ShopItem extends Component{

    constructor(props){
        super(props)
    }

    
    render(){
        return(
            <div>
            <CustomerNavBar/>
            <Hidden only="xs">
                <SideMenu/>
            </Hidden>
            <Hidden only='xs'>  
                <div style={{marginRight:"18%",marginLeft:"24%"}}>
                    <ItemList />
                </div>
                
            </Hidden>
            <Hidden only={["sm","lg","md","xl",]}>
                <div style={{marginLeft:"15px"}}>
                <ItemList />
                </div>
            </Hidden>           

        </div>
        )
    }
}
export default ShopItem;