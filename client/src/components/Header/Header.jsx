import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import { RiUserLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from '@mui/material';
import SearchBox from './Searchbox/SearchBox';
import Navigation from './Navigation/Navigation';
import { MyContext } from '../../routings/Routings';

const Header = () => {
  const context = useContext(MyContext);
  return (
    <div className='header-wrapper'>
      <div className="top-strip bg-green">
        <div className="container">
          <p className='mb-0 mt-0 text-center'>Free delivery on all orders above <b> &#8377; 500</b></p>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logo-wrapper d-flex align-items-center col-sm-2">
              <Link to={'/'}><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              {
                context.stateList.length !== 0 && <CountryDropdown />
              }
              <SearchBox />
              <div className="part3 d-flex align-items-center ml-auto">
                <Button className='circle mr-3'><RiUserLine /></Button>
                <div className="ml-auto cart-tab d-flex align-items-center">
                  <span className='price ml-3 mr-2'>&#8377;1500</span>
                  <div className="ml-3 position-relative">
                    <Button className='circle'><FaShoppingCart /></Button>
                    <span className='count position-absolute d-flex justify-content-center align-items-center'>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </div>
  )
}

export default Header;