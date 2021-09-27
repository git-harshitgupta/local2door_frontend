import './Item.css'
import seachIcon from '../Files/search-icon.png'
import ItemCard from './ItemCard'
import { Component } from 'react'
import axios from 'axios'
import { USER_API_BASE_URL } from '../Constant/Constants'

class ItemList extends Component{

    constructor(props){
        super(props)
        this.state={
            productList:[],
            search:"",
            cart:[]
        }
        this.searchHandler=this.searchHandler.bind(this);
        this.addProductToCart=this.addProductToCart.bind(this);
    }
    
    addProductToCart(){
        
    }

    searchHandler=(e)=>{
        this.setState({search:e})
            
    }
    componentDidMount(){
        this.getAllProduct();
        
    }

    getAllProduct(){
        axios.get(USER_API_BASE_URL+"/customer/getallproducts",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken"),
                "shopId":localStorage.getItem("shopId")
            }
        }).then((resp)=>{
            console.log(resp.data)
            this.setState({productList:resp.data,
                            product:resp.data})
            console.log(this.state.productList);
        })
    }

    render(){
        return(
            <div>
            <div className="container">
                <div className="search_wrap search_wrap_3">
                    <div className="search_box">
                        <input type="text" className="input" onChange={(e)=>{this.searchHandler(e.target.value)}} placeholder="Search Product"/>
                            <div className="btn btn_common">
                                <i className="fas fa-search">
                                    <img src={seachIcon} style={{width:"30px"}}/>
                                </i>
                            </div>
                    </div>
                </div>
            </div>
            {this.state.productList.map((product)=>{
                if(product.productName.toLowerCase().includes(this.state.search.toLowerCase()))
                    return <ItemCard product={product}/>
                }
            )}
                
        </div>
        )
    }
}
export default ItemList;