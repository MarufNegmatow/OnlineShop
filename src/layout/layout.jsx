import React, { useEffect, useState ,useRef} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logotip from "../assets/logotip.png";
import {Badge, InputAdornment, TextField } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import fastcart from "../assets/fastcart.png"
import logo2 from "../assets/logo2.png"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { MenuOutlined } from "@mui/icons-material";
import { Button, Drawer, Dropdown, Menu, Popover } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import IconFacebook from "../assets/Icon-Facebook.png"
import IconTwitter from "../assets/Icon-Twitter.png"
import IconInstagram from "../assets/icon-instagram.png"
import IconLinkeDin from "../assets/Icon-Linkedin.png"
import PersonIcon from '@mui/icons-material/Person';
import { jwtDecode } from "jwt-decode";
import { getToken, romoveToken } from "../utils/token";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LoginIcon from '@mui/icons-material/Login';
import { searchByProductName } from "../api/forProductsApi";
import { useDispatch } from "react-redux";


const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = ()=>{
        setIsDrawerOpen(!isDrawerOpen)
  }
    const dispatch = useDispatch();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getToken(); 
            
            setUser(token); 
        
    }, []);

    

 const navigate = useNavigate()
 const forLogOut = ()=>{
  romoveToken();
  navigate('/signUp')

 }
  const forlogIn =()=>{
    navigate('/signUp')
  }
 const userInfo = (
  <div>
    {user ? (
      <div className="flex flex-col items-stretch justify-center gap-2">
        <Button iconPosition="start" icon={<PersonIcon />} >Account</Button>
        <Button iconPosition="start" icon={<ShoppingBagIcon />} > My Order</Button>
        <Button iconPosition="start" onClick={forLogOut} icon={<LogoutIcon />} >Log Out</Button>
      </div>
    ) : (
      <div>
        <p><Button iconPosition="start" onClick={forlogIn} icon={<LoginIcon />} >Log In</Button></p>
      </div>
    )}
  </div>
);



  return (
    <div>
      <div className="header flex items-center justify-around py-5  sm:justify-between sm:px-[20px]">
        <div className="flex  items-center gap-2">
          <div className="lg:hidden flex items-center gap-[10%] ">
            <Button
              type="text"
              icon={<MenuOutlined fontSize="large" />}
              onClick={toggleDrawer}
            />
            <p className="font-bold text-[24px]">Exclusive</p>
            <Drawer
              title="Menu"
              placement="left"
              onClose={toggleDrawer}
              open={isDrawerOpen}
            >
              <Menu>
                <MenuItem key="home" onClick={toggleDrawer}>
                  <Link to={"/"}>Home</Link>
                </MenuItem>
                <MenuItem key="about" onClick={toggleDrawer}>
                  <Link to={"/about"}>About</Link>
                </MenuItem>

                <MenuItem key="signUp" onClick={toggleDrawer}>
                  <Link to={"/signUp"}>Sign Up</Link>
                </MenuItem>
              </Menu>
            </Drawer>
          </div>
          <Link to={"/"}>
            <div className="lg:flex items-center  gap-2 sm:hidden">
              <img src={logo2} alt="" />
              <img src={fastcart} alt="" />
            </div>
          </Link>
        </div>
        <ul className=" lg:flex  gap-8  sm:hidden ">
          <Link to={"/"}>
            <li className="">Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/signUp"}>
            <li>Sign Up</li>
          </Link>
        </ul>
        <div>
          <div className="flex items-center gap-10 ">
            <div>
              <TextField
                label="Search..."
                sx={{ width: "300px"}}
                onChange={(e) => dispatch(searchByProductName(e.target.value))}
              ></TextField>
            </div>
            <div className="flex items-center gap-2">
              <FavoriteBorderRoundedIcon fontSize="large" />
              <Link to={"/cart"}>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Link>
              <Popover
                content={userInfo}
                className="cursor-pointer"
                trigger="hover"
              >
                <PersonOutlinedIcon fontSize="large" />
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
      <div className="footer bg-black text-white p-4 flex flex-wrap gap-[20px]">
        <div className="flex-auto flex flex-col gap-2">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div>
            <TextField
              placeholder="Enter your email"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white", // цвет текста
                  "& fieldset": {
                    borderColor: "white", // цвет рамки
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // цвет рамки при наведении
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // цвет рамки при фокусе
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "white", // цвет плейсхолдера
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendOutlinedIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
        </div>
        <div className="flex-auto flex flex-col gap-2">
          <h2>Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex-auto flex flex-col gap-2">
          <h2>Account</h2>
          <p>My Account</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex-auto flex flex-col gap-2">
          <h2>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="social flex-auto">
          <h2>Social </h2>
          <div className="flex gap-2">
            <span>
              <img src={IconFacebook} alt="" />
            </span>
            <span>
              <img src={IconTwitter} alt="" />
            </span>
            <span>
              <img src={IconInstagram} alt="" />
            </span>
            <span>
              <img src={IconLinkeDin} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
