import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Button from "@mui/material/Button";
import {
  MdOutlineMenu,
  MdMenuOpen,
  MdOutlineLightMode,
  MdLightMode,
  MdShoppingCart,
  MdEmail,
  MdNotificationsActive,
  MdLockReset,
  MdNotifications,
} from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { IoLogOut } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

import Searchbox from "./searchbox/Searchbox";
import { ListItem } from "@mui/material";

const MemoMenuOpenButton = React.memo(MdMenuOpen);
const MemoAccountCircle = React.memo(RiAccountCircleFill);
const MemoLockReset = React.memo(MdLockReset);
const MemoShoppingCart = React.memo(MdShoppingCart);

const Header = () => {
  const [anchor, setAnchor] = useState(null);
  const [notification, setNotification] = useState(null);
  const open = Boolean(anchor);
  const open1 = Boolean(notification);

  {
    /** function to show the account dropdown */
  }
  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
  };

  {
    /** function to close the account dropdown */
  }
  const handleClose = () => {
    setAnchor(null);
  };

  {
    /** function to show the notification dropdown */
  }
  const handleOpenNotification = (e) => {
    setNotification(e.currentTarget);
  };

  {
    /** function to close the notification dropdown */
  }
  const handleCloseNotification = () => {
    setNotification(null);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/** logo */}
            <div className="col-sm-2 part1">
              <Link
                to={"/"}
                className="d-flex align-items-center text-decoration-none text-uppercase logo"
              >
                <img src={logo} alt="logo" />
                <span className="ml-1">
                  <text>dmin</text> panel
                </span>
              </Link>
            </div>
            {/** sidebar buttons */}
            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button variant="text" className="rounded-circle mr-4">
                <MemoMenuOpenButton />
              </Button>
              <Searchbox />
            </div>
            {/** other buttons */}
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button variant="text" className="rounded-circle mr-4">
                <MdOutlineLightMode />
              </Button>
              <Button variant="text" className="rounded-circle mr-4">
                <MemoShoppingCart />
              </Button>
              <Button variant="text" className="rounded-circle mr-4">
                <MdEmail />
              </Button>
              <div className="dropdown-wrapper position-relative">
                <Button
                  variant="text"
                  className="rounded-circle mr-4"
                  onClick={handleOpenNotification}
                >
                  <MdNotificationsActive />
                </Button>
                {/** dropdown for notification starts */}
                <Menu
                  anchorEl={notification}
                  className="notifications dropdown-list"
                  id="notifications"
                  open={open1}
                  onClose={handleCloseNotification}
                  onClick={handleCloseNotification}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Notifications(34)</h4>
                  </div>
                  <Divider className="mb-1" />
                  <div className="scroll">
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      <div className="d-flex">
                        <div>
                          <div className="user-image">
                            <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                              <img
                                src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                                alt="photo"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdown-info">
                          <h4>
                            <span>
                              <b>Suvam</b> added to his favourite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-blue mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-2 pr-2 pt-2 w-100">
                    <Button className="btn-blue w-100">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
                {/** dropdown for notification ends */}
              </div>
              {/** user image and info */}
              <div className="my-account-wrapper">
                <Button
                  className="my-account d-flex align-items-center"
                  onClick={handleOpen}
                >
                  <div className="user-image">
                    <span className="d-flex overflow-hidden justify-content-center rounded-circle">
                      <img
                        src="https://www.rexporn.sex/static/this-porn-is-amazing-big-booty-bitch-gets-her-pussy-plowed-in-the-gym.jpg"
                        alt="photo"
                      />
                    </span>
                  </div>
                  <div className="user-info">
                    <h4>Suvam Roy</h4>
                    <p className="mb-0">@suvam1999</p>
                  </div>
                </Button>
                {/** dropdown menu for account starts */}
                <Menu
                  anchorEl={anchor}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <MemoAccountCircle fontSize="small" color="#0858f7" />
                    </ListItemIcon>
                    My account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <MemoLockReset color="#0858f7" />
                    </ListItemIcon>
                    Reset password
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <IoLogOut fontSize="small" color="red" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                {/** dropdown menu for account ends */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
