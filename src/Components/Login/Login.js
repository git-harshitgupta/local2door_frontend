import { Grid, Hidden, TextField, Button } from "@material-ui/core";
import logo from "../Files/logo.png";
import cover from "../Files/coverimage.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ApiService from "../Service/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, seterrorMsg] = useState();
  const [validemail, setValidEmail] = useState(true);
  const [validePassword, setValidPassword] = useState(true);
  const [validaLogin, setValidLogin] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("jswtoken") != null) {
      if (localStorage.getItem("type") === "shopkeeper") {
        history.push("/shopkeepermenu");
      } else {
        history.push("/customermenu");
      }
    }
  }, []);

  const emailVerfiy = (e) => {
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(e)) {
      setValidLogin(true);
      setValidEmail(true);
      setEmail(e);
    } else {
      setValidLogin(true);
      setValidEmail(false);
    }
  };
  const validatePassword = (e) => {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)) {
      setPassword(e);
      setValidPassword(true);
      setValidLogin(true);
    } else {
      setValidLogin(true);
      setValidPassword(false);
    }
  };
  const loginHandler = () => {
    if (email == null) {
      setValidEmail(false);
    } else if (password == null) {
      setValidPassword(false);
    } else {
      const authenticationRequest = {
        username: email,
        password: password,
      };
      ApiService.loginUser(authenticationRequest)
        .then((resp) => {
          localStorage.setItem("jswtoken", resp.data.jwt);
          localStorage.setItem("email", resp.data.email);
          localStorage.setItem("type", resp.data.type);
          if (resp.data.type === "shopkeeper") {
            history.push("/shopkeepermenu");
          } else {
            history.push("/customermenu");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item sm={6}>
          <Hidden only="xs">
            <img
              src={cover}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Hidden>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img src={logo} width={200} />
            </Grid>
            {validaLogin ? (
              ""
            ) : (
              <span style={{ color: "red", marginLeft: "53px" }}>
                {errorMsg}
              </span>
            )}
            {validemail ? (
              <TextField
                onChange={(e) => emailVerfiy(e.target.value)}
                defaultValue={email}
                type="email"
                label="Email"
                variant="filled"
                color="secondary"
              />
            ) : (
              <TextField
                onChange={(e) => emailVerfiy(e.target.value)}
                error
                id="filled-error-helper-text"
                label="Email"
                defaultValue={email}
                helperText="Invalid Email"
                variant="filled"
              />
            )}
            <br />
            {validePassword ? (
              <TextField
                onChange={(e) => validatePassword(e.target.value)}
                defaultValue={password}
                type="password"
                label="Password"
                variant="filled"
                color="secondary"
              />
            ) : (
              <TextField
                onChange={(e) => validatePassword(e.target.value)}
                error
                id="filled-error-helper-text"
                type="password"
                label="Password"
                defaultValue={password}
                helperText="Invalid Password"
                variant="filled"
              />
            )}
            <br />
            <Button
              style={{ paddingLeft: "0px" }}
              variant="contained"
              color="primary"
              onClick={loginHandler}
            >
              Login
            </Button>
            <Link
              to="/signup"
              style={{ textDecoration: "none", marginLeft: "75px" }}
            >
              <Button>Not A Member?</Button>
            </Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
