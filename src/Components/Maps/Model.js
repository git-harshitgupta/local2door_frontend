import "./Modal.css";
import {useState} from 'react'
import ApiService from "../Service/ApiService";
import { useHistory } from "react-router";

export default function Modal(props) {
  const histroy=useHistory();
    const [modal, setModal] = useState(false);
    const [result,setresult]=useState();
    const Model = () => {
      setModal(!modal);
    };
    const toggleModal = () => {
      localStorage.setItem("location",props.longitude+","+props.latitude)
      let user={};
      if(localStorage.getItem('user')=="CUSTOMER"){
        user ={
        name:localStorage.getItem('name'),
        email:localStorage.getItem('email'),
        password:localStorage.getItem('password'),
        location:props.longitude+","+props.latitude,
        mobileNo:localStorage.getItem('mobileNo'),
        user:localStorage.getItem('user'),
        fullAddreas:localStorage.getItem('fullAddreas'),
        houseNo:localStorage.getItem('houseNo'),
        }
      }
      else{
        user ={
          shopName:localStorage.getItem('shopName'),
          email:localStorage.getItem('email'),
          password:localStorage.getItem('password'),
          location:props.longitude+","+props.latitude,
          mobileNo:localStorage.getItem('mobileNo'),
          user:localStorage.getItem('user'),
          fullAddreas:localStorage.getItem('fullAddreas'),
          shopRegId:localStorage.getItem('shopRegId'),
          }
      }
        ApiService.addUser(user);
        setresult("Registered");
       
        setModal(!modal);

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
            <h2>{result}</h2>
            
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}