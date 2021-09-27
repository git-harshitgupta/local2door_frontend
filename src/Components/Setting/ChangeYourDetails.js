import { Grid, makeStyles, Button, Hidden } from "@material-ui/core";
import { useEffect, useState } from "react";
import CustomerNavBar from "../NavBar/CustomerNavBar";
import SideMenu from "../NavBar/SideMenu";
import ApiService from "../Service/ApiService";
import { useHistory } from "react-router";
import "./Setting.css";
const useStyles = makeStyles({
  box: {
    width: "100%",
  },
  profileImage: {
    width: "200px",
    height: "200px",
    border: "1px dotted gray",
    borderRadius: "100%",
    objectFit: "cover",
  },
  addPhoto: {
    width: "40px",
    height: "40px",
    position: "relative",
    marginLeft: "153px",
    marginTop: "-54px",
    borderRadius: "100%",
  },
  textBox: {
    border: "2px solid #aaa",
    width: "200px",
    borderRadius: "4px",
    margin: "8px 2px",
    outline: "none",
    padding: "8px",
    boxSizing: "border-box",
    transition: ".3s",
    "&:focus": {
      borderColor: "dodgerBlue",
      boxShadow: "0 0 8px 0 dodgerBlue",
    },
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: "18px",
    marginTop: "13px",
  },
  buttonSubmit: {
    paddingLeft: "0px",
  },
});

function ChangeYourDetails() {
    const history=useHistory();
    const [valideName,setValidName]=useState(true);
    const [valideAdd,setValidAdd]=useState(true);
    const [userDetails,setUserDetails]=useState({
        name:"",
        fullAdd:"",
        houseNo:""
    })
  const classes = useStyles();
  useEffect(() => {
    if(localStorage.getItem("jswtoken")==null)
    history.push("/error")

      ApiService.getUserDetails().then((resp)=>{
          setUserDetails({
              name:resp.data.name,
              fullAdd:resp.data.fullAdd,
              houseNo:resp.data.houseNo
          })
      })
  }, [])
  const nameVerify=(e)=>{
    if(e.length>0){
        setUserDetails(prevState=>({
            ...prevState,
            name:e
        }))
        setValidName(true)
    }
    else{
        setValidName(false)
        setUserDetails(prevState=>({
            ...prevState,
            name:e
        }))
    }
}
const changeHouseNo=(e)=>{
    setUserDetails(prevState=>({
        ...prevState,
        houseNo:e
    }))
}
const validateAdd=(e)=>{
    if(e.length>0){
        setUserDetails(prevState=>({
            ...prevState,
            fullAdd:e
        }))
        setValidAdd(true)
    }
    else{
        setValidAdd(false)
        setUserDetails(prevState=>({
            ...prevState,
            fullAdd:e
        }))
    }
}
const submitButtonHandler=()=>{
    if(valideAdd&&valideName){
        ApiService.updateUserDetails(userDetails).then((resp)=>{
            history.push("/customer/setting")
        })
    }
}
  const showText = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <CustomerNavBar />
      <Hidden only="xs">
        <SideMenu />
      </Hidden>
      <Grid container className={classes.box}>
        <Grid sm={3} xs={2} />
        <Grid container item sm={9} xs={10}>
          <span className="text">Name</span>
        </Grid><Grid sm={3} xs={2} />
        <Grid container item sm={9} xs={10}>
          <input type="text" onChange={(e)=>nameVerify(e.target.value)} value={userDetails.name} className="textBox" />
            {valideName?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid name</span>}
        </Grid><Grid sm={3} xs={2} />
      
        <Grid container item sm={9} xs={10}>
          <span className="text">Full Address</span>
        </Grid><Grid sm={3} xs={2} />
        <Grid container item sm={9} xs={10}>
          <input type="text" onChange={(e)=>validateAdd(e.target.value)} value={userDetails.fullAdd}  className="textBox" />
          {valideAdd?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid address</span>}
        </Grid><Grid sm={3} xs={2} />
        <Grid container item sm={9} xs={10}>
          <span className="text">House No</span>
        </Grid><Grid sm={3} xs={2} />
        <Grid container item sm={9} xs={10}>
          <input type="text" value={userDetails.houseNo} onChange={(e)=>changeHouseNo(e.target.value)}  className="textBox" />
        </Grid><Grid sm={3} xs={3}/>
        <Grid container item sm={3} xs={9}>
          <Button
            style={{ paddingLeft: "0px" }}
            variant="contained"
            color="primary"
            onClick={submitButtonHandler}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default ChangeYourDetails;
