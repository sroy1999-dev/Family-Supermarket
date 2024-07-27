import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import { MdSpaceDashboard, MdShoppingCart, MdLock } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoNotifications, IoSettings } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);

  const isOpenSubmenu = useCallback((index) => {
    setActiveTab(index);
    setToggleSubmenu(!toggleSubmenu);
  }, [activeTab, toggleSubmenu, setActiveTab, setToggleSubmenu])

  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={'/'}>
              <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                <span className='icon'><MdSpaceDashboard /></span> Dashboard 
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
              <span className='icon'><AiFillProduct /></span> Products 
              <span className='arrow'>{activeTab === 1 && toggleSubmenu === true ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </Button>
            <div className={`submenu-wrapper ${activeTab === 1 && toggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
              <ul className="submenu">
                <li><Link to={'#'}>Product list</Link></li>
                <li><Link to={'#'}>Product view</Link></li>
                <li><Link to={'#'}>Product upload</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={'/'}>
              <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                <span className='icon'><MdShoppingCart /></span> Orders 
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                <span className='icon'><FaMessage /></span> Messages 
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                <span className='icon'><IoNotifications /></span> Notifications 
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                <span className='icon'><IoSettings /></span> Settings 
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
        </ul>
        <br />
        <div className="logout-wrapper">
          <div className="logout-box">
            <Button variant="contained"><MdLock /> Logout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;