import './Navbar';
import { Grid } from '@material-ui/core';
import { CustomerSiderData } from './CustomerSiderData';
function SideMenu(){
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
                            <span>{item.title}</span>
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