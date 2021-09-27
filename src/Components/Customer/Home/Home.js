import { Hidden } from "@material-ui/core";

import CustomerNavBar from "../../NavBar/CustomerNavBar";
import SideMenu from "../../NavBar/SideMenu";
import ShopList from "../ShopList/ShopList"
import ApiService from '../../Service/ApiService'
import './Home.css'
import { Component } from "react";
import axios from "axios";
class Home extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            shops: [],
            message: null
        }
        this.getAllStore=this.getAllStore.bind(this);
        this.shopClickHandler=this.shopClickHandler.bind(this);
        this.checkJwt=this.checkJwt.bind(this);
    }

    componentDidMount() {
        this.getAllStore();
    }
    checkJwt(){
        if(localStorage.getItem("jswtoken")==null){
            this.props.history.push('/error');
        }
    }

    getAllStore(){
        
        ApiService.getAllShop().then((resp)=>{
            this.setState({shops:resp.data})
            ApiService.getAllFiles()
        })
    }    

    shopClickHandler(shop){
        
    }

    render(){
        return(
            
            <div>
            <CustomerNavBar/>
            <Hidden only="xs">
                <SideMenu/>
            </Hidden>
            <Hidden only='xs'>  
            <div className='shopList'>
                {this.state.shops.map((shop)=>{
                return <ShopList data={shop}/>
                })}
            </div>
            </Hidden>
            <Hidden only={["sm","lg","md","xl",]}>
                <div className='shopListPhone'>
               
                {this.state.shops.map((shop)=>{
                    
                        return <ShopList  data={shop}/>
                    
            })} 
                
                
                </div>
            </Hidden>           

        </div>
        )
    }
}

export default Home;