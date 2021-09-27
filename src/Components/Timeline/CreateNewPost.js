import {Grid,TextField,Button,ThemeProvider,createTheme} from '@material-ui/core';
import addPhoto from '../Files/addPhoto.png';
import {useState} from 'react'
import { yellow } from '@material-ui/core/colors';
import ApiService from '../Service/ApiService';
const theme = createTheme({
    palette: {
      primary: yellow,
    },
  });
function CreateNewPost(){
    const [captionImage,setCaptionImage]=useState(addPhoto);
    const [caption,setCaption]=useState("");
    const [checkCaption,setCheckCaption]=useState(false);
    const [image,setImage]=useState();
    const changeCaption=(e)=>{
        setCaption(e);
        setCheckCaption(false);
    }
    const postButtonHandler=()=>{
        if(caption==""){
            setCheckCaption(true);
        }
        else{
            if(image==null){

            }
            else
            {
                ApiService.addCaptionWithImage(caption,image).then((resp)=>{}

                )
            }
        }
    }
    const imageHandler=(e)=>{
        console.log(e);
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState==2){
                setImage(e);
                setCaptionImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    
    return(
        <Grid style={{marginTop:"2%"}} container alignContent='center' className="borderShadow">
            <Grid item container xs={1} sm={1} >
               
            </Grid>
            
            <Grid item container xs={3} sm={3} >
                <div className="imageSize " >
                    <img src={captionImage} className="image"/>
                    
                </div>
            </Grid>
            <Grid item container xs={7} sm={7}>
            <TextField onChange={(e)=>changeCaption(e.target.value)} fullWidth label="Caption" id="fullWidth" />
            </Grid>
            <Grid item container xs={1} sm={1} >
               
            </Grid>
           
            <Grid item container xs={3} sm={3} >
            <input type="file" id="file-input" style={{display:"none"}} onChange={(e)=>imageHandler(e)} accept="image/*"/>
            <label for="file-input" className="imageHandle">
            ADD IMAGE
            </label>
            </Grid>
            <Grid item container xs={7} sm={7} >
               {checkCaption?<span style={{color:"red"}}>Please enter some caption to post</span>:""}
            </Grid>
            <Grid item container xs={2} sm={2}>
            <ThemeProvider theme={theme}>
                <Button onClick={postButtonHandler} style={{paddingLeft:"0px"}} variant="contained" color="primary" >
                    POST
                </Button>
            </ThemeProvider>
            </Grid>
            
        </Grid>
    );
}

export default CreateNewPost;