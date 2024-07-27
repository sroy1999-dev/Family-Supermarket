import React from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { TbMeat } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { MdOutlineBakeryDining, MdOutlineEmojiFoodBeverage, MdCall } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";

const Navigation = () => {
  return (
    <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 nav-part1">
              <Button className='all-category-tab align-items-center'>
                <span className='icon1 mr-2'><IoMenu /></span>
                <span className='text'>All categories</span>
                <span className='icon2 ml-2'><IoIosArrowDown /></span>
              </Button>
            </div>
            <div className="col-sm-10 nav-part2 d-flex align-items-center">
                <ul className="list list-inline ml-auto">
                    <li className="list-inline-item"><Link to={"/"} className='active'><Button><IoHomeOutline /> Home</Button></Link></li>
                    <li className="list-inline-item"><Link to={"/"}><Button><CiShop />Shop</Button></Link></li>
                    <li className="list-inline-item"><Link to={"/"}><Button><TbMeat />Meat and Seafood</Button></Link></li>
                    <li className="list-inline-item"><Link to={"/"}><Button><MdOutlineBakeryDining />Bakery</Button></Link></li>
                    <li className="list-inline-item"><Link to={"/"}><Button><MdOutlineEmojiFoodBeverage />Beverages</Button></Link></li>
                    <li className="list-inline-item"><Link to={"/"}><Button><RiBloggerLine />Blog</Button></Link></li>
                    <li className="list-inline-item"><Link to={"/"}><Button><MdCall />Contact</Button></Link></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navigation;