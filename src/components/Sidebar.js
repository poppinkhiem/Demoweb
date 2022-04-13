import React from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Setting from '../pages/Setting';
import Transaction from '../pages/Transaction';
import '../style/Sidebar.css';
import { SidebarData } from './SidebarData';


const Sidebar=({logout}) =>{


  return (
<>
<div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='Sidebar'>
   
        </div>
        <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            <li className='header'>
           <AiIcons.AiFillBank /> <span>E-Cards</span>
            </li> 
            <li>
            <AiIcons.AiFillAlert/> <button onClick={logout} style={{
              color: 'white',
              background: ' rgb(107, 19, 88)',
              fontZize: '20px',
              marginLeft: '10px',
              marginTop: '10px',
              padding: '5px',
              borderRadius: '13px',
          
            }}>Logout</button>
            </li>
          
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          



        </nav>

        
      </ IconContext.Provider>
      <div style={{backgroundColor: 'pink', width: '100vh', float: 'right' }}>
   TABLE
      </div  >
     

      </div>
</>
  );
}

export default Sidebar;
