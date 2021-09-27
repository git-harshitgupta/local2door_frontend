import { Grid, createTheme, ThemeProvider, Button } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import axios from "axios";
import { Component } from "react";
import ShopkeeperNavBar from "../NavBar/ShopkeeperNavBar";
import OrderCard from "./OrderCard";
import { USER_API_BASE_URL } from "../Constant/Constants";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: yellow,
  },
});
class ShopkeeperOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.getOrders = this.getOrders.bind(this);
  }
  componentDidMount() {
    this.getOrders();
  }
  getOrders() {
    axios
      .get(USER_API_BASE_URL + "/shopkeeper/getorder", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jswtoken"),
        },
      })
      .then((resp) => {
        console.log(resp.data);
        this.setState({ orders: resp.data });
      });
  }
  render() {
    return (
      <div>
        <ShopkeeperNavBar />
        <Grid container>
          <Grid container item sm={3} xs={0}></Grid>
          <Grid container item sm={6} xs={12}>
            {this.state.orders.map((data) => {
              return <OrderCard data={data} />;
            })}
            <ThemeProvider theme={theme}>
              <Link to="/shopkeepermenu" style={{textDecoration:"none"}}>
              <Button
                style={{ paddingLeft: "0px" }}
                variant="contained"
                color="primary"
              >
                Home
              </Button>
              </Link>
            </ThemeProvider>
          </Grid>
          <Grid container sm={3} xs={0}></Grid>
        </Grid>
      </div>
    );
  }
}
export default ShopkeeperOrder;
