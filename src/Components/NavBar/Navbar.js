import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { IconContext } from 'react-icons';
import { Grid,AppBar,Toolbar } from '@material-ui/core';
import { CustomerSiderData } from './CustomerSiderData';


function Navbar(){

    const [sidebar, setSidebar] = React.useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return(
        <div>
            <FaIcons.FaBars onClick={showSidebar} />
            <IconContext.Provider value={{ color: '#fff' }}>
        <div >
            {/* <Link to='#' className='menu-bars'> */}
            <Grid container alignItems="center">
            
            </Grid>            
            {/* </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                {/* <Link to='#' className='menu-bars'> */}
                <AiIcons.AiOutlineClose />
                {/* </Link> */}
            </li>
            {CustomerSiderData.map((item, index) => {
                return (
                <li key={index} className={item.cName}>
                    {/* <Link to={item.path}> */}
                    {item.icon}
                    <span>{item.title}</span>
                    {/* </Link> */}
                </li>
                );
            })}
            </ul>
        </nav>
        </IconContext.Provider>
        </div>
       
    );
}

export default Navbar;