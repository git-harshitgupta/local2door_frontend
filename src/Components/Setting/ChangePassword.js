import { Grid,Button,Hidden } from "@material-ui/core";
import CustomerNavBar from "../NavBar/CustomerNavBar";
import SideMenu from "../NavBar/SideMenu";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import './Setting.css'
import ApiService from "../Service/ApiService";
function ChangePassword(){
    const history=useHistory();
    const [oldPassword,setOldPassword]=useState();
    const [validePassword,setValidPassword]=useState(true);
    const [valideConfirmPassword,setConfirmValidPassword]=useState(true);
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [errormsg,setErrorMsg]=useState();
    useEffect(() => {
        if(localStorage.getItem("jswtoken")==null)
            history.push("/error")
        
    }, [])
    const validatePassword=(e)=>{
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)){
            setPassword(e);
            setValidPassword(true);
        }else{
            setValidPassword(false);
        }
        
    }
    const validateConfirmPassword=(e)=>{
        if(password==e){
            setConfirmValidPassword(true)
            setConfirmPassword(e)
        }
        else{
            setConfirmValidPassword(false)
        }
    }
    const submitButtonHandler=()=>{
        if(validePassword&&valideConfirmPassword){
            const data={
                oldPassword:oldPassword,
                newPassword:password
            }
            ApiService.changePassword(data).then((resp)=>{
                history.push("/customer/setting")
            }).catch((error)=>{
                setErrorMsg(error.response.data.message)
            })
        }
    }
    return(
        <div >
            <CustomerNavBar/>
            <Hidden only="xs">
                <SideMenu/>
            </Hidden>
            <Grid container>
                    
                    <Grid item sm={3} xs={2}/>
                    <Grid item sm={9} sx={10}>
                        <span style={{color:"red"}}>{errormsg}</span></Grid>
                    <Grid item sm={3} xs={2}/>
                        
                    <Grid container item sm={9} xs={10}>
                    <span  className='text'>Enter Your Old Password</span>
                    </Grid>
                    <Grid item sm={3} xs={2}/>
                    <Grid container item sm={9} xs={10}>
                    <input  onChange={(e)=>{setOldPassword(e.target.value)}} type="password" className='textBox'/>
                    </Grid>
                    <Grid item sm={3} xs={2}/>
                    <Grid container item sm={9} xs={10}>
                    <span className='text'>Enter New Password</span></Grid>
                    <Grid item sm={3} xs={2}/>
                    <Grid container item sm={9} xs={10}>
                    <input onChange={(e)=>validatePassword(e.target.value)} type="password" className='textBox'/>
                    {validePassword?"":<span style={{color:"red",marginTop:"13px"}}>Please enter a valid password</span>}
                    </Grid><Grid item sm={3} xs={2}/>
                    <Grid container item sm={9} xs={10}>
                    <span className='text'>Confirm Password</span></Grid>
                    <Grid item sm={3} xs={2}/>
                    <Grid container item sm={9} xs={10}>
                    <input onChange={(e)=>validateConfirmPassword(e.target.value)} type="password" className='textBox'/>
                    {valideConfirmPassword?"":<span style={{color:"red",marginTop:"13px"}}>Password didn't match</span>}
                    </Grid><Grid item sm={3} xs={2}/>
                    <Grid container item sm={3} xs={10}>
                <Button onClick={submitButtonHandler} style={{paddingLeft:"0px"}} variant="contained" color="primary">
                    Submit
                </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default ChangePassword;