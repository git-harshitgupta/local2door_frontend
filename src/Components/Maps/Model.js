import "./Modal.css";
import {useState,useContext} from 'react'
import ApiService from "../Service/ApiService";
import { ToastContainer, toast } from 'react-toastify';
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
    const [modal, setModal] = useState(false);
    const [result,setresult]=useState();
    const Model = () => {
      setModal(!modal);
    };
    const toggleModal = () => {
      setModal(!modal);
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
          var id=resp.data.id;
          if(form.profileImage==null)
          {
            notify()
            

          }
          else{
          ApiService.addProfilePicture(form.user.toLowerCase(),id,form.profileImage).then(()=>{
            const notify = () => toast("Registeration Succesful!");
            histroy.push("/")
            setForm("")
          })}
        })
       
        
    }
    
    const closeModal=()=>{
      setModal(!modal);
      histroy.push("/")
        
    
      
    }
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Submit
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Registered!</h2>
            
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
          </div>
         
        </div>
      )}
      
    </>
  );
}