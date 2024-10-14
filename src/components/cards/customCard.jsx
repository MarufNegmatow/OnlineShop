import React from "react";
import { Button, Card } from 'antd'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Radio from "../radio/radio";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forChekAddToCart } from "../../redusers/productSlice";
const CustomCard = ({productName,price,discountPrice,image,ID}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log("CartIdd",ID)
    const handleAddToCart = () => {
      const token = localStorage.getItem('token');
      if (token) {
          dispatch(forChekAddToCart({ ID }));
      } else {
          
          navigate("/signUp");
      }
  };

  return (
    <>
      <div className="relative w-fit group">
        <Card
          style={{ width: 300 }}
          cover={
            <img src={import.meta.env.VITE_APP_FILE_URL+image}  style={{objectFit:"cover", height:"250px"}}/>
          }
        >
          <h2 className="text-start font-bold text-[24px]">{productName}</h2>
          <p className="text-start text-red-700 flex gap-[20px] text-[20px]">${price} <span className="text-[grey] line-through">${discountPrice}</span></p>
          <div className="flex justify-start">
            <Radio/>
          </div>
        </Card>
        <div className="flex flex-col items-start absolute top-[5%] right-[5%] gap-[10px]">
          <Button className="">
            <FavoriteBorderIcon />
          </Button>
          <Link to={`/${ID}`}>
            <Button>
              <RemoveRedEyeOutlinedIcon />
            </Button>
          </Link>
        </div>
        <div className="absolute flex left-[0] right-0 justify-center top-[53%] w-[100%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <Button onClick={handleAddToCart} className="text-white w-[100%] bg-black ">Add To Cart</Button>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
