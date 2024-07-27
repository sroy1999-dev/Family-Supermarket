import React from 'react';
import { Button } from '@mui/material';
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="header-search ml-4 mr-4">
        <input type="text" placeholder='Search products' />
        <Button><IoIosSearch /></Button>
    </div>
  )
}

export default SearchBox;