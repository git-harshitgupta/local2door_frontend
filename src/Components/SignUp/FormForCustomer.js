import { Grid,TextField,makeStyles, Button } from "@material-ui/core";
import Alert from "@mui/material/Alert"
import ApiService from "../Service/ApiService";
import './Signup.css'
import { useState } from "react";
import { useHistory } from "react-router";
import logo from '../Files/logo.png';
import profilePictureEdit from '../Files/editProfilePicture.png'
const useStyle=makeStyles({
    textBox:{
        marginLeft:"5px",
        marginTop:"10px", 
        width:"80%"
    },
    button:{
        width:"10%",
        marginLeft:"5px",
        marginTop:"10px"

    }
})
function FromForCustomer(props){
    let histroy=useHistory();
    const classes=useStyle();
    const [profile,setProfile]=useState(logo);
    const [email,setEmail]=useState();
    const [validemail,setValidEmail]=useState(true);
    const [phone,setPhone]=useState();
    const [validePhone,setValidPhone]=useState(true);
    const [password,setPassword]=useState();
    const [validePassword,setValidPassword]=useState(true);
    const [valideName,setValidName]=useState(true);
    const [name,setName]=useState();
    const [add,setAdd]=useState("");
    const [house,setHouse]=useState();
    const [valideAdd,setValidAdd]=useState(true);
    const [emailError,setEmailError]=useState(false);
    const emailVerfiy=(e)=>{
        setEmailError(false);
        if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(e)){
            console.log("done");
            setValidEmail(true);
            setEmail(e);
        }
        else{
            setValidEmail(false);
        }
    }
    const validatePhone=(e)=>{
        if(/\d{10}/.test(e)){
            setPhone(e);
            setValidPhone(true);
        }else{
            setValidPhone(false);
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
    const imageHandler=(e)=>{
        console.log(e);
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState==2){
                setProfile(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const nameVerify=(e)=>{
        if(e.length>0){
            setName(e)
            setValidName(true)
        }
        else{
            setValidName(false)
            setName(e)
        }
    }
    const validateAdd=(e)=>{
        if(e.length>0){
            setAdd(e)
            setValidAdd(true)
        }
        else{
            setValidAdd(false)
            setAdd(e)
        }
    }
    const buttonHandler=()=>{
        if(email==null){
            setValidEmail(false);
        }else if(password==null){
            setValidPassword(false);
        }else if(phone==null){
            setValidPhone(false);
        }else if(name==null){
            console.log("name function")
            setValidName(false);
        }else if(add==""){
            console.log("add function")
            setValidAdd(false);
        }
        else{
            ApiService.fetchEmailCustomer(email).then(resp=>{
                if(resp.data=='Not Exist'){
                    ApiService.fetchEmailShopkeeper(email).then(resp=>{
                        if(resp.data=='Not Exist'){
                            
                                localStorage.setItem('email',email);
                                localStorage.setItem('password',password);
                                localStorage.setItem('mobileNo',phone);
                                localStorage.setItem('user',"CUSTOMER");
                                localStorage.setItem('name',name);
                                localStorage.setItem('fullAddreas',add);
                                localStorage.setItem('houseNo',house);
                                localStorage.setItem('profileImage',profile);
                            
                                histroy.push("/signup/location");
                        }
                        else{
                            setEmailError(true);
                        }
                })  
            }           
        })
    }
    }
    return(
        
        <Grid  direction="column" alignItem="center">
            
            <Grid item container style={{marginLeft:"30vw"}} sm={3} xs={3}>
                    <img src={profile} className="profileImage"/>
                    <input type="file" id="file-input" style={{display:"none"}} onChange={(e)=>imageHandler(e)} accept="image/*"/>
                    <img src={profilePictureEdit} className="addPhoto"/>
                    <label for="file-input" className="addPhoto"></label>
                </Grid>
            <Grid item  container alignContent="center">
                <Grid xs={12}  sm={6}>
                    {validemail?<TextField onChange={(e)=>emailVerfiy(e.target.value)} defaultValue={email} type="email" label="Email" variant="filled" color="secondary" className={classes.textBox}/>:
                    <TextField
                    onChange={(e)=>emailVerfiy(e.target.value)}
                    error
                    id="filled-error-helper-text"
                    label="Email"
                    defaultValue={email}
                    helperText="Invalid Email"
                    variant="filled"
                    className={classes.textBox}
                  />}
                    {/* <TextField onChange={(e)=>emailVerfiy(e.target.value)} type="email" label="Email" variant="filled" color="secondary" className={classes.textBox}/> */}
                </Grid>
                <Grid xs={12} sm={6}>
                {validePassword?<TextField onChange={(e)=>validatePassword(e.target.value)} defaultValue={password} type="password" label="Password" variant="filled" color="secondary" className={classes.textBox}/>:
                    <TextField
                    onChange={(e)=>validatePassword(e.target.value)}
                    error
                    id="filled-error-helper-text"
                    type='password'
                    label="Password"
                    defaultValue={password}
                    helperText="Invalid Password"
                    variant="filled"
                    className={classes.textBox}
                  />}</Grid>
                
            </Grid>
           
            <Grid item container alignContent="center">
                <Grid xs={12} sm={6}>
                {validePhone?<TextField onChange={(e)=>validatePhone(e.target.value)} defaultValue={phone} type="number" label="Phone no" variant="filled" color="secondary" className={classes.textBox}/>:
                    <TextField
                    onChange={(e)=>validatePhone(e.target.value)}
                    error
                    id="filled-error-helper-text"
                    type='number'
                    label="Phone no"
                    defaultValue={phone}
                    helperText="Invalid Phone no"
                    variant="filled"
                    className={classes.textBox}
                  />}
                </Grid>
                <Grid xs={12} sm={6}>
                {valideName?<TextField onChange={(e)=>nameVerify(e.target.value)} defaultValue={name} type="text" label="Name" variant="filled" color="secondary" className={classes.textBox}/>:
                    <TextField
                    onChange={(e)=>nameVerify(e.target.value)}
                    error
                    id="filled-error-helper-text"
                    type='text'
                    label="Name"
                    defaultValue={name}
                    helperText="Enter a valid name"
                    variant="filled"
                    className={classes.textBox}
                  />}</Grid>
                

            </Grid>
            <Grid item container alignContent="center">
                <Grid xs={12} sm={6}>
                {valideAdd?<TextField onChange={(e)=>validateAdd(e.target.value)} defaultValue={add} type="text" label="Address" variant="filled" color="secondary" className={classes.textBox}/>:
                    <TextField
                    onChange={(e)=>validateAdd(e.target.value)}
                    error
                    id="filled-error-helper-text"
                    type='text'
                    label="Address"
                    defaultValue={add}
                    helperText="Enter a valid Address"
                    variant="filled"
                    className={classes.textBox}
                  />}</Grid>
                <Grid xs={12} sm={6}>
                    <TextField onChange={(e)=>(setHouse(e.target.value))} type="number" label="House No" variant="filled" color="secondary" className={classes.textBox}/>
                </Grid>
                <Grid item xs={12} xs={12}>
                {emailError?
                <Alert style={{width:'100%'}}severity="error">Error!-Email is already in use</Alert>:""}
                </Grid>
                <Grid xs={12} sm={6}>
                    
                    {/* <Link to='/signup/location'> */}
                        <Button onClick={buttonHandler} variant="contained" style={{paddingLeft:'0px'}} color="secondary" className={classes.button}>Next</Button>
                    {/* </Link> */}
            </Grid>
            </Grid>
            
        </Grid>
    );
}
export default FromForCustomer;