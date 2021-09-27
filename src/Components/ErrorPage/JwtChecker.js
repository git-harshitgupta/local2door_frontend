import { useHistory } from "react-router"

export const JwtChecker = () => {
    const history=useHistory();
   if(localStorage.getItem("jswtoken"==null)){
       history.push("/error")
   }
}
