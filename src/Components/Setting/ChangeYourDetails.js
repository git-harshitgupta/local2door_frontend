import { Grid,makeStyles,TextField,Button } from "@material-ui/core";
import { useState } from "react";
import logo from '../Files/logo.png';
import profilePictureEdit from '../Files/editProfilePicture.png'
import * as IconsMd from 'react-icons/md'
import { Label } from "@material-ui/icons";
import { border } from "@material-ui/system";
import './Setting.css'
const useStyles=makeStyles({
    box:{
        width:"100%",
        
    },
    profileImage:{
        width:"200px",
        height:"200px",
        border:"1px dotted gray",
        borderRadius:"100%",
        objectFit:"cover"
    },
    addPhoto:{
        width: '40px',
        height: '40px',
        position: 'relative',
        marginLeft: '153px',
        marginTop: '-54px',
        borderRadius: '100%'
    },
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
    },
    text:{
        fontFamily:"Montserrat",
        fontSize:"18px",
        marginTop:"13px"
    },
    buttonSubmit:{
        paddingLeft:"0px"
    }
})

function ChangeYourDetails(){
    const classes=useStyles();
    const [profile,setProfile]=useState(logo);
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
    const showText=(e)=>{
        console.log(e.target.value);
    }
    return(
        <div>
            <Grid container className={classes.box} direction="column">
                <Grid item container sm={3} xs={3}>
                    <img src={profile} className="profileImage"/>
                    <input type="file" id="file-input" style={{display:"none"}} onChange={(e)=>imageHandler(e)} accept="image/*"/>
                    <img src={profilePictureEdit} className="addPhoto"/>
                    <label for="file-input" className="addPhoto"></label>
                </Grid>
                <Grid container item sm={7}>
                    <span className='text'>Name</span>
                    </Grid>
                    <Grid container item sm={7}>
                    <input type="text" className='textBox'/>
                    </Grid>
                    <Grid container item sm={7}>
                    <span className='text'>Full Address</span></Grid>
                    <Grid container item sm={7}>
                    <input type="text" className='textBox'/>
                    </Grid>
                    <Grid container item sm={7}>
                    <span className='text'>House No</span></Grid>
                    <Grid container item sm={7}>
                    <input type="text" className='textBox'/>
                    </Grid>
                    <Grid container item sm={7}>
                    <span className='text'>How To Reach</span></Grid>
                    <Grid container item sm={7}>
                    <input type="text" className='textBox'/>
                    
                </Grid>
                <Grid container item sm={3}>
                <Button style={{paddingLeft:"0px"}} variant="contained" color="primary">
                    Submit
                </Button>
                </Grid>
                
                
            </Grid>
        </div>
    );
}
export default ChangeYourDetails;