import { Hidden } from "@material-ui/core";
import { Component } from "react";
import CustomerNavBar from "../NavBar/CustomerNavBar"
import SideMenu from "../NavBar/SideMenu"
import axios from 'axios';
import { USER_API_BASE_URL } from '../Constant/Constants'
import { Link } from "react-router-dom";
class OrderDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            orderDetailsList:[]
        }
        this.getAllOrderDetails=this.getAllOrderDetails.bind(this);
        this.detailsButtonHandler=this.detailsButtonHandler.bind(this);
    }
    
    componentDidMount(){
        this.getAllOrderDetails();
    }

    getAllOrderDetails(){
        console.log("inside getAllOrder")
        axios.get(USER_API_BASE_URL+"/customer/getallorderdetails",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken")
            }
        }).then((resp)=>{
            this.setState({
                orderDetailsList:resp.data
            })
            console.log(this.state.orderDetailsList)
        })
    }
    detailsButtonHandler(order){
        localStorage.setItem("orderId",order);
    }
    render(){
        return(
            <div>
                <div>
                <CustomerNavBar/>
                <Hidden only="xs">
                    <SideMenu/>
                </Hidden>
                <Hidden only='xs'>  
                <div>
                <h2 className="text-center">Order Details</h2>
                    <table className="table table-striped" style={{marginLeft:"16%",width:"80%"}}>
                        <thead>
                            <tr>
                                <th>Shop Name</th>
                                <th>Total Price</th>
                                <th>Order Date</th>
                                <th>Order Time</th>
                                <th>Payment</th>
                                <th>Details</th>
                                <th>Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orderDetailsList.map((order)=>
                                <tr>
                                    <td>{order.shopName}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.localTime}</td>
                                    <td>{order.payment=='true'?"Done":"Pending"}</td>
                                    <td>
                                        <Link to="/customer/orderdetails/info" style={{textDecoration:"none"}}>
                                        <button onClick={(index)=>{this.detailsButtonHandler(order.orderId)}} className="btn btn-success"> Details</button>
                                        </Link>
                                    </td>
                                    <td>{order.status}</td>
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                    
                    
                </div>
                </Hidden>
                <Hidden only={["sm","lg","md","xl",]}>
                    <div >
                    <h2 className="text-center">Order Details</h2>
                    <table className="table table-striped" style={{marginLeft:"5%",width:"70%"}}>
                        <thead>
                            <tr>
                                <th>Shop Name</th>
                                <th>Total Price</th>
                                <th>Order Date</th>
                                <th>Order Time</th>
                                <th>Payment</th>
                                <th>Details</th>
                                <th>Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orderDetailsList.map((order)=>
                                <tr>
                                    <td>{order.shopName}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.localTime}</td>
                                    <td></td>
                                    <td>
                                        <Link to="/customer/orderdetails/info" style={{textDecoration:"none"}}>
                                        <button onClick={(index)=>{this.detailsButtonHandler(order.orderId)}} className="btn btn-success"> Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                    </div>
                </Hidden>           

            </div>
            
            
            
            
            </div>
        )
    };
}
export default OrderDetails;