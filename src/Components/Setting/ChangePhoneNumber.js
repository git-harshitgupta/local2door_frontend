import {Grid,makeStyles, TextField} from "@material-ui/core";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { useState } from "react";
import firebase from '../firebase';
const setStyles=makeStyles({
    textBox:{
        border:"2px solid #aaa",
        width:"200px",
        borderRadius:"4px",
        margin:"8px 2px",
        outline:"none",
        padding:"8px",
        boxSizing:"border-box",
        transition:".3s",
        "&:focus":{
            borderColor:"dodgerBlue",
            boxShadow:"0 0 8px 0 dodgerBlue"
        }
    },text:{
        fontFamily:"Montserrat",
        fontSize:"18px",
        marginTop:"13px"
    }
})

function ChangePhoneNumber(){
    const auth = getAuth();
    const phoneNumber = "+917987281833";
    const cofigureCaptcha=()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    },
    defaultCountry:"IN"
    });
}

    const onSignInSubmit = () =>{
        const phoneNumber= "+917987281833";
        console.log(phoneNumber);
        cofigureCaptcha();
        const appVerifer = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber,appVerifer).then((confirmationResult)=>{
            window.confirmationResult=confirmationResult;
            console.log("otp send");
        }).catch((error)=>{

        });
    }
    const classes=setStyles();
    const [phoneNo,setPhoneNo]=useState();
    const [showOptBox,setOptBox]=useState(false);
    const [otpCode,setOtpCode]=useState();
    const [userotpCode,setUserOtpCode]=useState();
    const verify=()=>{
        otpCode.confirm(userotpCode).then(function(result){
            console.log(result.user,'user');
        })
    }
    const handleVerification=()=>{
        let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha');
        setOtpCode(firebase.auth().signInWithPhoneNumber(phoneNo,recaptcha));
            setOptBox(true);
        
    }
    return(
        <div id='sign-in-button'>
        <Grid container item sm={7}>
        <span className={classes.text}>Name</span>
        </Grid>
        <Grid container item sm={7}>
        <input type="text" onChange={(e)=>setPhoneNo(e.target.value)} className={classes.textBox}/>
        <button onClick={onSignInSubmit}>Click</button>
        {showOptBox? <div><input type="text" onChange={(e)=>{setUserOtpCode(e.target.value)}}/>
                    <button onClick={verify}>Submit</button></div>
        :""}
        </Grid>
        </div>
    );
}
export default ChangePhoneNumber;