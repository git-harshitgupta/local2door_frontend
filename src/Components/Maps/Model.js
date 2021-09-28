import "./Modal.css";
import {useState,useContext} from 'react'
import ApiService from "../Service/ApiService";
import { toast } from 'react-toastify';
import { useHistory } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import { SignUpFormContext } from "../Context/SignUpFormContext";
export default function Modal(props) {
  const notify = () => {
    toast("Registeration Succesful!")
    histroy.push("/")
            setForm("")
  }
  const histroy=useHistory();
  const [form,setForm]=useContext(SignUpFormContext);
   
    const toggleModal = () => {
      let user={};
      if(form.user=="CUSTOMER"){
        user ={
        name:form.name,
        email:form.email,
        password:form.password,
        lati:props.latitude,
        longi:props.longitude,
        mobileNo:form.mobileNo,
        user:"CUSTOMER",
        fullAddreas:form.fullAddreas,
        houseNo:form.house,
        }
      }
      else{
        user ={
          shopName:form.shopName,
          email:form.email,
          password:form.password,
          lati:props.latitude,
          longi:props.longitude,
          mobileNo:form.mobileNo,
          user:"SHOPKEEPER",
          fullAddreas:form.fullAddreas,
          shopRegId:form.shopRegId,
          }
      }
        console.log(user);
        ApiService.addUser(user).then((resp)=>{
          var id=resp.data;
          if(form.profileImage==null)
          {
            toast.success('Registeration Successful!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
              histroy.push("/")
              setForm("")

          }
          else{
          ApiService.addProfilePicture(form.user.toLowerCase(),id,form.profileImage).then(()=>{
            toast.success('Registeration Successful!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            histroy.push("/")
            setForm("")
          })}
        })
       
        
    }

  
    
  return (
    <>
      <button onClick={toggleModal} className=" btn-primary btn-modal">
        Submit
      </button>

     
      
    </>
  );
}