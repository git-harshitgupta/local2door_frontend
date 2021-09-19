import FormForCustomer from '../../Components/SignUp/FormForCustomer'
import {connect} from 'react-redux'
import { addUserDetails } from '../Services/Action/Action'

const mapStateToProps=state =>({

})
const mapDispatchToProps=dispatch=>({
    addUserHandler:data=>dispatch(addUserDetails(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormForCustomer)

