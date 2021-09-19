import axios from 'axios'

import { withRouter } from 'react-router';
const USER_API_BASE_URL = 'http://localhost:7070/local2door';
class ApiService{
    

    fetchEmailCustomer(email){
        return axios.get(USER_API_BASE_URL+'/emailexistincustomer/'+email);
    }
    fetchEmailShopkeeper(email){
        return axios.get(USER_API_BASE_URL+'/emailexistinshopkeeper/'+email);
    }
    addUser(user) {
        return axios.post(USER_API_BASE_URL+"/adduser",user).then((resp)=>{
            var id=resp.data.id;
            localStorage.clear();
            
            function addProfilePicture(){
                const formData = new FormData();
                formData.append("formData", localStorage.getItem("profileImage"));
                return axios.post(USER_API_BASE_URL+"/4/profileImage",formData).then((resp)=>{
                    if(resp.data=='success'){
                        localStorage.clear();
                    }
                })
            }
            // addProfilePicture();
        })
            
    }
    login(authenticationRequest){   
        
        console.log("inside login medthd")
        
    }
    getShopkeeperName(jwtToken){
        
    }
}
export default new ApiService();