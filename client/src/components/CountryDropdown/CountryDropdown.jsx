import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowDown, IoIosSearch, IoIosClose } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../routings/Routings";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [stateList, setStateList] = useState([]);
  const context = useContext(MyContext);

  const handleOpen = useCallback(() => {
    SetIsModalOpen(true);
  }, [])
  const handleClose = useCallback(() => {
    SetIsModalOpen(false);
  }, [])

  const selectState = (index, name) => {
    setSelectedTab(index);
    handleClose();
    context.setSelectedState(name);
  }

  useEffect(() => {
    setStateList(context.stateList);
  }, [])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if(keyword !== "") {
      const list = stateList.filter((item) => {
        return item.name.toLowerCase().includes(keyword);
      });
      setStateList(list);
    }else {
      setStateList(context.stateList);
    }
  }

  return (
    <>
      <Button className="country-dropdown" onClick={handleOpen}>
        <div className="info d-flex flex-column">
          <span className="label">Select state</span>
          <span className="country-name">{context.selectedState !== '' ? context.selectedState.substr(0, 12) : 'Select location'}</span>
        </div>
        <span className="ml-auto">
          <IoIosArrowDown />
        </span>
      </Button>
      {/** country modal starts */}
      <Dialog className="location-modal" open={isModalOpen} onClose={handleClose} TransitionComponent={Transition}>
        <h4 className="mb-0">Choose your delivery location</h4>
        <p>Enter your address and we will specify the offer for your area if any</p>
        <Button className="_close" onClick={handleClose}><IoIosClose /></Button>
        <div className="header-search w-100">
          <input type="text" placeholder='Search your state' onChange={filterList} />
          <Button><IoIosSearch /></Button>
        </div>
        <ul className="state-list mt-3">
          {
            stateList.length !== 0 && stateList.map((item, index) => {
              return (
                <li key={index}><Button className={`${selectedTab === index ? 'active' : ''}`} onClick={() => selectState(index, item.name)}>{item.name}</Button></li>
              )
            })
          }
        </ul>
      </Dialog>
      {/** country modal ends */}
    </>
  );
};

export default CountryDropdown;
