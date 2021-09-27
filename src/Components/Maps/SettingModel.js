import "./Modal.css";
import {useState,useContext} from 'react'
import ApiService from "../Service/ApiService";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router";
import { SignUpFormContext } from "../Context/SignUpFormContext";
export default function SettingModel(props) {
  const histroy=useHistory();
  const [form,setForm]=useContext(SignUpFormContext);
    const [modal, setModal] = useState(false);
    const [result,setresult]=useState();
    const Model = () => {
      setModal(!modal);
    };
    const toggleModal = () => {
     var location={
         longi:props.longitude,
         lati:props.latitude
     }
     ApiService.changeLocation(location).then((resp)=>{
         histroy.push("/customer/setting")
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
          <ToastContainer />
        </div>
      )}
      
    </>
  );
}