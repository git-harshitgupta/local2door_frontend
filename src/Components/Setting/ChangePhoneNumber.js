import { Grid, makeStyles, Hidden } from "@material-ui/core";
import CustomerNavBar from "../NavBar/CustomerNavBar";
import SideMenu from "../NavBar/SideMenu";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ApiService from "../Service/ApiService";
const setStyles = makeStyles({
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
});

function ChangePhoneNumber() {
    const history = useHistory();
    const classes = setStyles();
    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(true);
    const [errormsg,setErrorMsg]=useState();
    const validatePhone = (e) => {
        if (/\d{10}/.test(e) && e.length == 10) {
            setPhone(e);
            setValidPhone(true);
        } else {
            setValidPhone(false);
        }
    };
    useEffect(() => {
        if (localStorage.getItem("jswtoken") == null) 
            history.push("/error");
    }, []);
    const changeButtonHandler=()=>{
        if(validPhone&&phone.length==10){
            
            ApiService.changePhone(phone).then((resp)=>{
                history.push("/customer/setting")
            }).catch((error)=>{
                setErrorMsg(error.response.data.message)
            })
        }
        else{
            setValidPhone(false);
        }
    }

    return (
        <div>
            <CustomerNavBar />
            <Hidden only="xs">
                <SideMenu />
            </Hidden>
            <Grid container style={{ marginTop: "5%" }}>
            <Grid item sm={3} xs={2}/>
                    <Grid item sm={9} xs={10}>
                        <span style={{color:"red"}}>{errormsg}</span></Grid>
            <Grid sm={3} xs={2} />
            <Grid item sm={9} xs={10}>
            <span className={classes.text}>Enter the new phone number</span>
            </Grid>
            <Grid sm={3} xs={2} />
            <Grid container item sm={7} xs={10}>
            <input
            type ="text"
            onChange={(e) => validatePhone(e.target.value)}
            className={classes.textBox}
            />
        {validPhone?"": <span style={{color: "red",marginTop: "10px"}}>Please enter a valid phone number</span>}
            </Grid>
            <Grid sm={3} xs={2} />
            <Grid sm={9} xs={10}>
            <button onClick={changeButtonHandler} type ="button" class ="btn btn-primary">
            Change
            </button>
            </Grid>
            </Grid>
        </div>
    );
}
export default ChangePhoneNumber;
