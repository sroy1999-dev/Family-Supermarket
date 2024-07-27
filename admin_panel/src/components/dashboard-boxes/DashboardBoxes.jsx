import React, { useCallback, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "@mui/material/Button";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RxCountdownTimer } from "react-icons/rx";

const ITEM_HEIGHT = 48;

const DashboardBoxes = (props) => {
  const { color, heading, number, icon, grow } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  })

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  })

  return (
    <Button
      className="dashboard-box"
      style={{
        backgroundImage: `linear-gradient(to right, ${color?.[0]}, ${color?.[1]})`,
      }}
    >
      {grow === true ? (
        <span className="chart">
          <TrendingUpIcon />
        </span>
      ) : (
        <span className="chart">
          <TrendingDownIcon />
        </span>
      )}
      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white">{heading}</h4>
          <span className="text-white mb-0">{number}</span>
        </div>
        <div className="ml-auto">
          {icon ? <span className="icon">{icon ? icon : ""}</span> : ""}
        </div>
      </div>
      <div className="d-flex align-items-center w-100 bottom-element">
        <h6 className="text-white mb-0 mt-0">Last month</h6>
        <Button className="ml-auto toggle-icon" onClick={handleClick}>
          <BsThreeDotsVertical />
        </Button>
        <Menu
        className="box-dropdown-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
            onClick={handleClose}
          >
            <RxCountdownTimer />
            Last day
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <RxCountdownTimer />
            Last week
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <RxCountdownTimer />
            Last month
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <RxCountdownTimer />
            Last year
          </MenuItem>
      </Menu>
      </div>
    </Button>
  );
};

export default DashboardBoxes;
