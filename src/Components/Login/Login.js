import { Grid,Hidden,TextField,Button } from "@material-ui/core";
import logo from "../Files/logo.png";
import cover from "../Files/coverimage.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import ApiService from "../Service/ApiService";
function Login(){
    const history=useHistory();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [validemail,setValidEmail]=useState(true);
    const [validePassword,setValidPassword]=useState(true);
    const emailVerfiy=(e)=>{
        
        if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(e)){
            console.log("done");
            setValidEmail(true);
            setEmail(e);
        }
        else{
            setValidEmail(false);
        }
    }
    const validatePassword=(e)=>{
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)){
            setPassword(e);
            setValidPassword(true);
        }else{
            setValidPassword(false);
        }
        
    }
    const loginHandler=()=>{
        if(email==null){
            setValidEmail(false);
        }
        else if(password==null){
            setValidPassword(false);
        }
        else{
            console.log("in side button method")
           const authenticationRequest={
               username:email,
               password:password
           }
           axios.post("http://localhost:8080/local2door/authenticate",authenticationRequest).then((resp)=>{
            localStorage.setItem("jswtoken",resp.data.jwt);
            if(resp.data.type=="shopkeeper")
                history.push("/shopkeermenu")
        }).catch((error)=>{
            
        })
           
        }
    }
    return(
        <div>
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item sm={6} >
                    <Hidden only="xs">
                        <img src={cover} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </Hidden>
                </Grid>
                <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding:10}}>
                    <div/>
                    <div style={{display:'flex',flexDirection:"column",maxWidth:400,minWidth:300}}>
                        <Grid container justify="center">
                            <img src={logo} width={200}/>
                        </Grid>
                        
                        {validemail?<TextField onChange={(e)=>emailVerfiy(e.target.value)} defaultValue={email} type="email" label="Email" variant="filled" color="secondary"/>:
                        <TextField
                            onChange={(e)=>emailVerfiy(e.target.value)}
                            error
                            id="filled-error-helper-text"
                            label="Email"
                            defaultValue={email}
                            helperText="Invalid Email"
                            variant="filled"
                                
                         />} 
                        <br/>
                        {validePassword?<TextField onChange={(e)=>validatePassword(e.target.value)} defaultValue={password} type="password" label="Password" variant="filled" color="secondary" />:
                    <TextField
                    onChange={(e)=>validatePassword(e.target.value)}
                    error
                    id="filled-error-helper-text"
                    type='password'
                    label="Password"
                    defaultValue={password}
                    helperText="Invalid Password"
                    variant="filled"
                    
                  />}  
                        <br/>
                        <Button style={{paddingLeft:"0px"}} variant="contained" color="primary" onClick={loginHandler}>Login</Button>
                        <Link to='/signup' style={{textDecoration:"none",marginLeft:"75px"}}>
                        <Button >Not A Member?</Button>
                        </Link>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;