import { Grid } from "@material-ui/core";
import signUpCustomer from '../Files/signUpCustomer.png';
import addShopkeeper from '../Files/addShopkeeper.png';
import './Signup.css'
import { Link } from "react-router-dom";
function CustomerOrShopkeeper(){
    return(
        <div>
            <Grid container>
                <Grid container item sm={3} xs={0}>
                </Grid>
                <Grid container item alignContent='center' direction="column" sm={3} xs={12}>
                    <Link to="/signup/customer" style={{textDecoration:"none"}}>
                    <div className='signUpCardContainer' >
                    <img src={signUpCustomer} className="signUpCard"/>
                    <span className='signUpCardText'>Sign Up As Customer</span>
                    </div>
                    </Link>
                </Grid>
                <Grid container direction="column" item sm={3} xs={12}>
                <Link to="/signup/shopkeeper" style={{textDecoration:"none"}}>
                    <div className='signUpCardContainer' >
                    <img src={addShopkeeper} className="signUpCard"/>
                    <span className='signUpCardText'>Sign Up As Shopkeeper</span>
                    </div>
                    </Link>
                </Grid>
                <Grid container  sm={3} xs={0}>

                </Grid>

            </Grid>
        </div>
    );
}
export default CustomerOrShopkeeper;