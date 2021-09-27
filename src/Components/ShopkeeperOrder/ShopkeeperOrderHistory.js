import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { USER_API_BASE_URL } from "../Constant/Constants";
import ShopkeeperNavBar from "../NavBar/ShopkeeperNavBar";

export default class ShopkeeperOrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.getOrderHistroy = this.getOrderHistroy.bind(this);
    this.detailsButtonHandler=this.detailsButtonHandler.bind(this);
  }

  componentDidMount() {
    this.getOrderHistroy();
  }

  getOrderHistroy() {
    axios
      .get(USER_API_BASE_URL + "/shopkeeper/getallorders", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jswtoken"),
        },
      })
      .then((resp) => {
        console.log(resp.data);
        this.setState({ orders: resp.data });
      });
  }
  detailsButtonHandler(order){
    localStorage.setItem("orderId",order);
}

  render() {
    return (
      <div>
        <ShopkeeperNavBar />
        <h2 className="text-center">Order Details</h2>
        <table
          className="table table-striped"
          style={{ marginLeft: "5%", width: "80%" }}
        >
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Order Time</th>
              <th>Payment</th>
              <th>Details</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order) => (
              <tr>
                <td>{order.customerName}</td>
                <td>{order.totalPrice}</td>
                <td>{order.orderDate}</td>
                <td>{order.localTime}</td>
                <td>{order.payment == "true" ? "Done" : "Pending"}</td>
                <td>
                  <Link
                    to="/shopkeeper/orderdetails/info"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      onClick={(index) => {
                        this.detailsButtonHandler(order.orderId);
                      }}
                      className="btn btn-success"
                    >
                      Details
                    </button>
                  </Link>
                </td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/shopkeepermenu" style={{ textDecoration: "none" }}>
          <button
            style={{ marginLeft: "46%" }}
            type="button"
            class="btn btn-warning"
          >
            Go Back
          </button>
        </Link>
      </div>
    );
  }
}
