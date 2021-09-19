import {Grid,TextField,Button,ThemeProvider,createTheme} from '@material-ui/core';
import addPhoto from '../Files/addPhoto.png';
import {useState} from 'react'
import { yellow } from '@material-ui/core/colors';
const theme = createTheme({
    palette: {
      primary: yellow,
    },
  });
function CreateNewPost(){
    const [captionImage,setCaptionImage]=useState(addPhoto);
    const imageHandler=(e)=>{
        console.log(e);
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState==2){
                setCaptionImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    
    return(
        <Grid container alignContent='center' className="borderShadow">
            <Grid item container xs={1} sm={1} >
               
            </Grid>
            
            <Grid item container xs={3} sm={3} >
                <div className="imageSize " >
                    <img src={captionImage} className="image"/>
                    
                </div>
            </Grid>
            <Grid item container xs={7} sm={7}>
            <TextField
                id="outlined-full-width"
                label="Caption"
                style={{ margin: 8 }}
                placeholder="Write Here"
                
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
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
               
            </Grid>
            <Grid item container xs={2} sm={2}>
            <ThemeProvider theme={theme}>
                <Button style={{paddingLeft:"0px"}} variant="contained" color="primary" >
                    POST
                </Button>
            </ThemeProvider>
            </Grid>
            
        </Grid>
    );
}

export default CreateNewPost;