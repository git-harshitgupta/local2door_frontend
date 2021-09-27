import React, { Component } from "react";
import { Hidden } from "@material-ui/core";
import axios from "axios";
import { USER_API_BASE_URL } from "../Constant/Constants";
import ShopkeeperNavBar from "../NavBar/ShopkeeperNavBar";

import SideMenu from "../NavBar/SideMenu";
import { Link } from "react-router-dom";
export default class OrderProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      orderDetails: "",
      deliverButton:true
    };
    this.getOrderDetails = this.getOrderDetails.bind(this);
    this.deilverButtonHandler = this.deilverButtonHandler.bind(this);
  }

  componentDidMount() {
    this.getOrderDetails();
  }

  getOrderDetails() {
    axios
      .get(
        USER_API_BASE_URL +
          "/shopkeeper/getorderdetails?orderId=" +
          localStorage.getItem("orderId"),
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jswtoken"),
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        this.setState({ orderDetails: resp.data });
        axios
          .get(
            USER_API_BASE_URL +
              "/customer/getproductlist?orderId=" +
              localStorage.getItem("orderId"),
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("jswtoken"),
              },
            }
          )
          .then((resp) => {
            this.setState({ productList: resp.data });
          });
      });
  }

  deilverButtonHandler() {
      console.log("inside deliver button")
    axios
      .get(
        USER_API_BASE_URL +
          "/shopkeeper/productdelivered?orderId=" +
          this.state.orderDetails.orderId,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jswtoken"),
          },
        }
      )
      .then((resp) => {
        this.setState({ orderDetails: resp.data,deliverButton:false });
      });
  }

  render() {
    return (
      <div>
        <ShopkeeperNavBar />

        <div>
          <h2 className="text-center">Order Details</h2>
          <div style={{ marginLeft: "5%", width: "80%" }}>
            <h6>Customer Name:{this.state.orderDetails.customerName}</h6>
            <h6>Order Date:{this.state.orderDetails.orderDate}</h6>
            <h6>Order Time:{this.state.orderDetails.orderTime}</h6>
            <h6>Total:{this.state.orderDetails.totalPrice}</h6>
            <h6>Status:{this.state.orderDetails.status}</h6>
            <h6>
              Addreas:{this.state.orderDetails.customerHouseNo},
              {this.state.orderDetails.customerAdd}
            </h6>
            <h6>Mobile No:{this.state.orderDetails.mobileNo}</h6>
            
          </div>
          <table
            className="table table-striped"
            style={{ marginLeft: "5%", width: "80%" }}
          >
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productList.map((order) => (
                <tr>
                  <td>{order.productName}</td>
                  <td>{order.productPrice}</td>
                  <td>{order.productQuantity}</td>
                  <td>
                    {parseFloat(order.productPrice) *
                      parseFloat(order.productQuantity)}
                  </td>

                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/shopkeeper/orderhistory" style={{textDecoration:"none"}}>
        <button
          style={{ marginLeft: "43%" }}
          type="button"
          class="btn btn-warning"
        >
          Go Back
        </button>
        </Link>
        {this.state.orderDetails.status=='Delivered'?"":<button
          style={{ marginLeft: "1%" }}
          type="button"
          class="btn btn-warning"
          onClick={this.deilverButtonHandler}
        >
          Delivered
        </button>}
        
      </div>
    );
  }
}
