import React, { useState, useCallback } from "react";
import DashboardBoxes from "../components/dashboard-boxes/DashboardBoxes";
import { PiUserSquareFill } from "react-icons/pi";
import { HiShoppingCart } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { LiaStarSolid } from "react-icons/lia";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RxCountdownTimer } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "@mui/material/Button";
import { Chart } from "react-google-charts";

const ITEM_HEIGHT = 48;

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor': 'transparent',
  legendTextStyle: {
    color: '#fff'
  },
  titleTextStyle: {
    color: '#fff'
  },
  hAxis: {
    color: '#fff'
  }
};

const Homepage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  })

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  })
  return (
    <div>
      <div className="right-side-content w-100 mt-2">
        <div className="row dashboard-box-wrapper-row">
          <div className="col-md-8">
            <div className="dashboard-box-wrapper d-flex">
              <DashboardBoxes
                color={["#1da256", "#48d483"]}
                heading={"Total users"}
                number={277}
                icon={<PiUserSquareFill />}
                grow={true}
              />
              <DashboardBoxes
                color={["#c012e2", "#eb64fe"]}
                heading={"Total orders"}
                number={338}
                icon={<HiShoppingCart />}
                grow={false}
              />
              <DashboardBoxes
                color={["#2c78e5", "#60aff5"]}
                heading={"Total products"}
                number={557}
                icon={<BsBagFill />}
                grow={false}
              />
              <DashboardBoxes
                color={["#e1950e", "#f3cd29"]}
                heading={"Total reviews"}
                number={166}
                icon={<LiaStarSolid />}
                grow={true}
              />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graph-box">
              <div className="d-flex align-items-center w-100 bottom-element">
                <h4 className="text-white mb-0 mt-0">Total sales</h4>
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
                  <MenuItem onClick={handleClose}>
                    <RxCountdownTimer />
                    Last day
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <RxCountdownTimer />
                    Last week
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <RxCountdownTimer />
                    Last month
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <RxCountdownTimer />
                    Last year
                  </MenuItem>
                </Menu>
              </div>
              <h3 className="text-white font-weight-bold">&#x20B9; 3, 787, 681.00</h3>
              <p className="text-white">&#x20B9; 3, 578.90 last month</p>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="21.25rem"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
