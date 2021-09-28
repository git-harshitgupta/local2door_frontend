import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


import { IconContext } from 'react-icons';
import { Grid } from '@material-ui/core';
import { CustomerSiderData } from './CustomerSiderData';


function Navbar(){

    const [sidebar, setSidebar] = React.useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return(
        <div>
            <FaIcons.FaBars onClick={showSidebar} />
            <IconContext.Provider value={{ color: '#fff' }}>
        <div >
            
            <Grid container alignItems="center">
            
            </Grid>            
            
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                
                <AiIcons.AiOutlineClose style={{color:'black'}}/>
               
            </li>
            {CustomerSiderData.map((item, index) => {
                return (
                <li key={index} className='navbar-menu'>
                    
                    {item.icon}
                    <span>{item.title}</span>
                    
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