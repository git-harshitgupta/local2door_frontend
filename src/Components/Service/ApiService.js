import axios from 'axios'
import httpCommon from './http-common';
const USER_API_BASE_URL = 'http://localhost:8080/local2door';
const userToken = localStorage.getItem("jswtoken");
const userEmail = localStorage.getItem("email");

const token=()=>{
    return { Authorization:userToken}
}
class ApiService{
    

    fetchEmail(email){
        return axios.get(USER_API_BASE_URL+'/emailexist/'+email);
    }
    fetchPhone(phone){
        return axios.get(USER_API_BASE_URL+'/phoneexist/'+phone);
    }
    
    addUser(user) {
        return axios.post(USER_API_BASE_URL+"/adduser",user)
    }
    addProfilePicture(user,id,image){
        let formData = new FormData();
        formData.append("file",image);
        if(user==='customer'){
            return httpCommon.post(USER_API_BASE_URL+"/filehandler/profileimage/customer/"+id,formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
            })
        }
        else{
            return httpCommon.post(USER_API_BASE_URL+"/filehandler/profileimage/shopkeeper/"+id,formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
            })
        }
    }
    login(authenticationRequest){   
        
        console.log("inside login medthd")
        
    }
    getShopkeeperName(){
        
    }
    addProduct(product){
       
        return axios.post(USER_API_BASE_URL+"/shopkeeper/addproduct",product,{
            headers:{
                "Authorization":"Bearer "+userToken,
                
            }
        })
    }
    
    updateProductItem(product){
        return axios.put(USER_API_BASE_URL+"/shopkeeper/updateproductitem",product,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        }).then(()=>{
            localStorage.removeItem("productId");
        })
    }

    openCloseStore(){
        
        return axios.get(USER_API_BASE_URL+"/shopkeeper/openclose",{
            headers:{
                
                "Authorization":"Bearer "+userToken,
            }
        })
    }
    checkOrder(){
        return axios.get(USER_API_BASE_URL+"/shopkeeper/checkorder",{
            headers:{
                "Authorization":"Bearer "+userToken,
            }
        })
    }

    getShopName(){
        return axios.get(USER_API_BASE_URL+"/shopkeeper/name",{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    getProductAvailability(productList){
        return axios.post(USER_API_BASE_URL+"/customer/chackavilability",productList,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    placeOrder(productList){
        return axios.post(USER_API_BASE_URL+"/customer/placeorder",productList,{
            headers:{
                "Authorization":"Bearer "+userToken,
                "payment":"false",
                "totalPrice":localStorage.getItem("totalPrice"),
                "shopId":localStorage.getItem("shopId"),
                "order":"pending"
            }
        })
    }
    closeStore(){
        return axios.get(USER_API_BASE_URL+"/shopkeeper/closeStore",{
            headers:{
                "Authorization":"Bearer "+userToken,
                
            }
        })
    }
    loadProductList(){
        return axios.get(USER_API_BASE_URL+"/shopkeeper/getallproduct",{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    getUserDetails(){
        return axios.get(USER_API_BASE_URL+"/customer/getuserdetails",{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    updateUserDetails(details){
        console.log(details)
        return axios.post(USER_API_BASE_URL+"/customer/saveuserdetails",details,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    changePassword(details){
        console.log(details)
        return axios.post(USER_API_BASE_URL+"/customer/changepassword",details,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    changePhone(details){
        console.log(details)
        return axios.post(USER_API_BASE_URL+"/customer/changephone",details,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    changeLocation(data){
        console.log(data)
        return axios.post(USER_API_BASE_URL+"/customer/changelocation",data,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    getAllShop(){
        return axios.get(USER_API_BASE_URL+"/customer/getallshop",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken")
            }
        })
    }
    getAllFiles(){
        return axios.get(USER_API_BASE_URL+"/filehandler/shopkeeper/files",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken")
            }
        })
    }
    getShopkeeperDetails(){
        return axios.get(USER_API_BASE_URL+"/shopkeeper/getshopkeeperdetails",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken")
            }
        })
    }
    updateShopkeeperDetails(data){
        return axios.post(USER_API_BASE_URL+"/shopkeeper/updatedetails",data,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken")
            }
        })
    }
    changeShopkeeperPassword(details){
        console.log(details)
        return axios.post(USER_API_BASE_URL+"/shopkeeper/changepassword",details,{
            headers:{
                "Authorization":"Bearer "+userToken
            }
        })
    }
    loginUser(authenticationRequest){
       return axios
        .post(
          USER_API_BASE_URL+"/authenticate",
          authenticationRequest
        )
    }
}

export default new ApiService();