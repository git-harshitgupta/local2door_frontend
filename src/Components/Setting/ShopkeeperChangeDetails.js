import React, { useState } from 'react'
import { Grid, makeStyles, Button } from "@material-ui/core";
import ApiService from "../Service/ApiService";
import { useHistory } from "react-router";
import { useEffect } from 'react';
import ShopkeeperNavBar from '../NavBar/ShopkeeperNavBar'

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
export const ShopkeeperChangeDetails = () => {
    const history=useHistory();
    const classes = useStyles();
    const [valideName, setValidName] = useState(true);
    const [valideAdd, setValidAdd] = useState(true);
    const [errormsg,setErrorMsg]=useState();
    const [valideRegId, setValidRegId] = useState(true);
    const [valideMobile, setValidMobile] = useState(true);
    const [shopkeeperDetails,setShopkeeperDetails]=useState({});
    const nameVerify=(e)=>{
        if(e.length>0){
            setShopkeeperDetails(prevState=>({
                ...prevState,
                shopName:e
            }))
            setValidName(true)
        }
        else{
            setValidName(false)
            setShopkeeperDetails(prevState=>({
                ...prevState,
                shopName:e
            }))
        }
    }
    const changeRegId=(e)=>{
        if(e.length>0){
            setShopkeeperDetails(prevState=>({
                ...prevState,
                registerationId:e
            }))
            setValidRegId(true)
        }
        else{
            setValidRegId(false)
            setShopkeeperDetails(prevState=>({
                ...prevState,
                registerationId:e
            }))
        }
    }
    const validateAdd=(e)=>{
        if(e.length>0){
            setShopkeeperDetails(prevState=>({
                ...prevState,
                registerationId:e
            }))
            setValidAdd(true)
        }
        else{
            setValidAdd(false)
            setShopkeeperDetails(prevState=>({
                ...prevState,
                add:e
            }))
        }
    }
    const submitButtonHandler=()=>{
        if (valideName&&validateAdd&&valideMobile&&valideRegId) {
            ApiService.updateShopkeeperDetails(shopkeeperDetails).then((resp)=>{
                history.push("/shopkeeper/setting")
            }).catch((error)=>{
                setErrorMsg(error.response.data.message)
            })
        }
    }
    const changePhone=(e)=>{
        if (/\d{10}/.test(e) && e.length == 10) {
            setShopkeeperDetails(prevState=>({
                ...prevState,
                mobileNo:e
            }))
            setValidMobile(true);
        } else {
            setShopkeeperDetails(prevState=>({
                ...prevState,
                mobileNo:e
            }))
            setValidMobile(false);
        }
    }
  useEffect(() => {
    if(localStorage.getItem("jswtoken")==null)
    history.push("/error")

      ApiService.getShopkeeperDetails().then((resp)=>{
          setShopkeeperDetails({
              shopName:resp.data.shopName,
              add:resp.data.add,
              registerationId:resp.data.registerationId,
              mobileNo:resp.data.mobileNo,

          })
      })
  }, [])
    return (
        <div>
            <ShopkeeperNavBar/>
            <Grid container className={classes.box}>
            <Grid item sm={4} xs={2}/>
            <Grid item sm={8} xs={10}>
                <span style={{color:"red"}}>{errormsg}</span></Grid>
          
        <Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <span className="text">Shop Name</span>
        </Grid><Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <input type="text" onChange={(e)=>nameVerify(e.target.value)} value={shopkeeperDetails.shopName} className="textBox" />
            {valideName?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid Shop Name</span>}
        </Grid><Grid sm={4} xs={2} />
      
        <Grid container item sm={8} xs={10}>
          <span className="text">Shop Address</span>
        </Grid><Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <input type="text" onChange={(e)=>validateAdd(e.target.value)} value={shopkeeperDetails.add}  className="textBox" />
          {valideAdd?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid address</span>}
        </Grid><Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <span className="text">Registeration Id</span>
        </Grid><Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <input type="text" value={shopkeeperDetails.registerationId} onChange={(e)=>changeRegId(e.target.value)}  className="textBox" />
          {valideRegId?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid registeration id</span>}
        </Grid>
        <Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <span className="text">Mobile No</span>
        </Grid><Grid sm={4} xs={2} />
        <Grid container item sm={8} xs={10}>
          <input type="text" value={shopkeeperDetails.mobileNo} onChange={(e)=>changePhone(e.target.value)}  className="textBox" />
          {valideMobile?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid Phone nummber</span>}
        
        </Grid><Grid sm={5} xs={3}/>
        <Grid container item sm={7} xs={8}>
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
    )
}
