import React from 'react';
import { MdOutlineSearch } from "react-icons/md";

const Searchbox = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>
        <MdOutlineSearch className='mr-2' />
        <input type='text' placeholder='Search' />
    </div>
  )
}

export default Searchbox;