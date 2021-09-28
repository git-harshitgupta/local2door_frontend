import './Navbar';

import { CustomerSiderData } from './CustomerSiderData';
import { useHistory } from "react-router";

function SideMenu(){
    const history=useHistory()
    return(
        <div className="wrapper">
            <div className="sidebar">
                <h2>Menu</h2>
                <ul className="side-menu-list">
                    {CustomerSiderData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                            {/* <Link to={item.path}> */}
                            {item.icon}
                            <span onClick={()=>{history.push(item.path)}}>{item.title}</span>
                            {/* </Link> */}
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
export default SideMenu;