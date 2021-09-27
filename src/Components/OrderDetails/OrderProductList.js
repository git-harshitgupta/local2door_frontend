import React, { Component } from "react";
import { Hidden } from "@material-ui/core";
import axios from "axios";
import { USER_API_BASE_URL } from "../Constant/Constants";
import CustomerNavBar from "../NavBar/CustomerNavBar";
import SideMenu from "../NavBar/SideMenu";
export default class OrderProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      orderDetails: "",
    };
    this.getOrderDetails = this.getOrderDetails.bind(this);
  }

  componentDidMount() {
    this.getOrderDetails();
  }

  getOrderDetails() {
    axios
      .get(
        USER_API_BASE_URL +
          "/customer/getorderdetails?orderId=" +
          localStorage.getItem("orderId"),
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jswtoken"),
          },
        }
      )
      .then((resp) => {
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

  render() {
    return (
      <div>
        <div>
          <CustomerNavBar />
          <Hidden only="xs">
            <SideMenu />
          </Hidden>
          <Hidden only="xs">
            <div>
              <h2 className="text-center">Order Details</h2>
              <div style={{ marginLeft: "16%", width: "80%" }}>
                <h6>Shop Name:{this.state.orderDetails.shopName}</h6>
                <h6>Order Date:{this.state.orderDetails.orderDate}</h6>
                <h6>Order Time:{this.state.orderDetails.localTime}</h6>
                <h6>Total:{this.state.orderDetails.totalPrice}</h6>
                <h6>Status:{this.state.orderDetails.status}</h6>
              </div>
              <table
                className="table table-striped"
                style={{ marginLeft: "16%", width: "80%" }}
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
          </Hidden>
          <Hidden only={["sm", "lg", "md", "xl"]}>
            <div>
              <h2 className="text-center">Order Details</h2>
              <div style={{ marginLeft: "16%", width: "80%" }}>
                <h6>Shop Name:{this.state.orderDetails.shopName}</h6>
                <h6>Order Date:{this.state.orderDetails.orderDate}</h6>
                <h6>Order Time:{this.state.orderDetails.localTime}</h6>
                <h6>Total:{this.state.orderDetails.totalPrice}</h6>
                <h6>Status:{this.state.orderDetails.status}</h6>
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
          </Hidden>
          
        </div>
      </div>
    );
  }
}
