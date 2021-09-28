import { Grid, TextField, makeStyles, Button } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import ApiService from "../Service/ApiService";
import "./Signup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { SignUpFormContext } from "../Context/SignUpFormContext";
import logo from "../Files/logo.png";
import profilePictureEdit from "../Files/editProfilePicture.png";

const useStyle = makeStyles({
  textBox: {
    marginLeft: "5px",
    marginTop: "10px",
    width: "80%",
  },
  button: {
    width: "10%",
    marginLeft: "5px",
    marginTop: "10px",
  },
});
function FromForCustomer(props) {
  const [form, setForm] = useContext(SignUpFormContext);
  let histroy = useHistory();
  const classes = useStyle();
  const [image, setImage] = useState();
  const [profile, setProfile] = useState(logo);
  const [email, setEmail] = useState();
  const [validemail, setValidEmail] = useState(true);
  const [phone, setPhone] = useState();
  const [validePhone, setValidPhone] = useState(true);
  const [password, setPassword] = useState();
  const [validePassword, setValidPassword] = useState(true);
  const [valideName, setValidName] = useState(true);
  const [name, setName] = useState();
  const [add, setAdd] = useState("");
  const [house, setHouse] = useState();
  const [valideAdd, setValidAdd] = useState(true);
  const emailVerfiy = (e) => {
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(e)) {
      console.log("done");
      setValidEmail(true);
      setEmail(e);
    } else {
      setValidEmail(false);
    }
  };
  const validatePhone = (e) => {
    if (/\d{10}/.test(e) && e.length == 10) {
      setPhone(e);
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };
  const validatePassword = (e) => {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)) {
      setPassword(e);
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const nameVerify = (e) => {
    if (e.length > 0) {
      setName(e);
      setValidName(true);
    } else {
      setValidName(false);
      setName(e);
    }
  };
  const validateAdd = (e) => {
    if (e.length > 0) {
      setAdd(e);
      setValidAdd(true);
    } else {
      setValidAdd(false);
      setAdd(e);
    }
  };
  const buttonHandler = () => {
    if (email == null) {
      setValidEmail(false);
    } else if (password == null) {
      setValidPassword(false);
    } else if (phone == null) {
      setValidPhone(false);
    } else if (name == null) {
      console.log("name function");
      setValidName(false);
    } else if (add == "") {
      console.log("add function");
      setValidAdd(false);
    } else {
      ApiService.fetchEmail(email)
        .then((resp) => {
          ApiService.fetchPhone(phone)
            .then((resp) => {
              setForm({
                email: email,
                password: password,
                mobileNo: phone,
                user: "CUSTOMER",
                name: name,
                fullAddreas: add,
                houseNo: house,
                profileImage: image,
              });
              histroy.push("/signup/location");
            })
            .catch((error) => {
              toast.warn(error.response.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        })
        .catch((error) => {
          toast.warn(error.response.data.message, {
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
    
    <Grid  container >
      <Grid  sm={3} xs={0}/> 
      <Grid className="formbox" direction="column" alignContent="center" sm={6} xs={12}>
        <span className="headingText">Customer SignUp Form</span>
        <h1/>
      

        <div>

        <img src={profile} className="profileImage" />
        <input
          type="file"
          id="file-input"
          style={{ display: "none" }}
          onChange={(e) => imageHandler(e)}
          accept="image/*"
          />
        <img src={profilePictureEdit} className="profileImageAddIcon" />
        <label for="file-input" className="profileImageAddIcon"></label>
      
        </div>
        
        {validemail ? (
            <TextField
              onChange={(e) => emailVerfiy(e.target.value)}
              defaultValue={email}
              type="email"
              label="Email"
              variant="filled"
              color="secondary"
              className={classes.textBox}
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
              className={classes.textBox}
            />
          )}
          {validePassword ? (
            <TextField
              onChange={(e) => validatePassword(e.target.value)}
              defaultValue={password}
              type="password"
              label="Password"
              variant="filled"
              color="secondary"
              className={classes.textBox}
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
              className={classes.textBox}
            />
          )}
          {validePhone ? (
            <TextField
              onChange={(e) => validatePhone(e.target.value)}
              defaultValue={phone}
              type="number"
              label="Phone no"
              variant="filled"
              color="secondary"
              className={classes.textBox}
            />
          ) : (
            <TextField
              onChange={(e) => validatePhone(e.target.value)}
              error
              id="filled-error-helper-text"
              type="number"
              label="Phone no"
              defaultValue={phone}
              helperText="Invalid Phone no"
              variant="filled"
              className={classes.textBox}
            />
          )}
          {valideName ? (
            <TextField
              onChange={(e) => nameVerify(e.target.value)}
              defaultValue={name}
              type="text"
              label="Name"
              variant="filled"
              color="secondary"
              className={classes.textBox}
            />
          ) : (
            <TextField
              onChange={(e) => nameVerify(e.target.value)}
              error
              id="filled-error-helper-text"
              type="text"
              label="Name"
              defaultValue={name}
              helperText="Enter a valid shop name"
              variant="filled"
              className={classes.textBox}
            />
          )}
          {valideAdd ? (
            <TextField
              onChange={(e) => validateAdd(e.target.value)}
              defaultValue={add}
              type="text"
              label="Address"
              variant="filled"
              color="secondary"
              className={classes.textBox}
            />
          ) : (
            <TextField
              onChange={(e) => validateAdd(e.target.value)}
              error
              id="filled-error-helper-text"
              type="text"
              label="Address"
              defaultValue={add}
              helperText="Enter a valid Address"
              variant="filled"
              className={classes.textBox}
            />
          )}
         
            <TextField
              onChange={(e) => setHouse(e.target.value)}
              
              type="number"
              label="House No"
              variant="filled"
              color="secondary"
              className={classes.textBox}
            />
          
           <Button
            onClick={buttonHandler}
            variant="contained"
            style={{ paddingLeft: "0px",marginLeft: "35%" }}
            color="secondary"
            className={classes.button}
          >
            Next
          </Button>
      </Grid>
      <Grid  sm={3} xs={0}/> 

      
      
      
     
    </Grid>
  );
}
export default FromForCustomer;
