import PhostHolder from "./PhostHolder";
import {Grid} from "@material-ui/core"
import CreateNewPost from "./CreateNewPost";
function ShopkeeperTimeline(){
    return(
        <div>
            <Grid container>
                <Grid item container xs={0} sm={3}>
                    <div>

                    </div>
                </Grid>
                <Grid direction="column" alignContent="center" container xs={12} sm={6}>
                    <CreateNewPost/>
                    <PhostHolder/>
                </Grid>
                <Grid item container xs={0} sm={3}>
                    <div>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default ShopkeeperTimeline;