import React from 'react';
import { useContext, useEffect, useState } from 'react';
import './sidebar.css';
import {SidebarContext} from '../contexts/SidebarContext';
import { sidebarLinks } from '../data/sidebarData';

const Sidebar=()=>{
    const [activeLinkIdx, setActiveLinkIdx] = useState(null);
    const [sidebarClass, setSidebarClass] =useState("");
    const {isOpen}=useContext(SidebarContext)
    
    useEffect(()=>{
      if(isOpen){
            setSidebarClass('sidebar-change');
        }
        else{
            setSidebarClass('')
        }
    const currentPath = window.location.pathname;
    const activeLink = sidebarLinks.find((link) => link.link === currentPath);
    if (activeLink) {
      setActiveLinkIdx(activeLink.id);
    }
  }
    , [isOpen] 
    );

    const handleLinkClick = (linkId) => {
        setActiveLinkIdx(linkId);
      };

    return(
        <div className={`sidebar ${sidebarClass}`}>
        <div className='user-info'>
        <div className='user-img img-fit-cover'>
        <img/>
      </div>
        <span className='user-name'>Yegana Khalil</span>
        </div>
        <nav className='navbar'>
         <ul className='navbar-list'>
        {
         sidebarLinks.map((sidebarLink)=>(
            <li className='navbar-item' key={sidebarLink.id} >
            <a  href={sidebarLink.link}
                className={`navbar-link ${sidebarLink.id === activeLinkIdx ? 'active' : ''}`}
                onClick={() => handleLinkClick(sidebarLink.id)}>
            <span className='navbar-link-icon'>{sidebarLink.icon}</span>  
           <span className='navbar-link-text'>{ sidebarLink.title }</span> 
            </a>
            </li>
         ))
        }
         </ul>
        </nav>
           
        </div>
    )
}


export default Sidebar;