import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, FormControlLabel, Radio, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { pink, red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById, GetProducts, searchByProductName } from "../api/forProductsApi";
import CustomCard from "../components/cards/customCard";
import { useParams } from "react-router-dom";
import { TextFields } from "@mui/icons-material";



const Category = () => {
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  const { id } = useParams()

     const [value, setValue] = useState([20, 37]);

     const handleChange = (event, newValue) => {
       setValue(newValue);
    };
    

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetProducts())
      dispatch(getCategoryById(id));
    },[id])
    const { products, byID } = useSelector((state) => state.forProductSlice);
    console.log(products)
  return (
    <div>
    
      <div>
        {id && (
          <div>
            <div className="bg-[white] w-[95%] h-[350px] m-auto flex justify-center items-center rounded-lg overflow-hidden shadow-xl mt-[70px] ">
              <div className="relative ">
                <img
                  src={import.meta.env.VITE_APP_FILE_URL + byID?.categoryImage}
                  className="w-fit h-64 object-cover object-center"
                  alt=""
                />
                <div className="">
                  <p className="text-white text-2xl font-bold">
                    {byID?.data?.categoryName}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div className="text-5xl font-semibold text-gray-800">
                    {byID?.categoryName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-around mt-[70px] mb-[100px]">
        <div className="child1">
          <div className="Raditel">
            <hr className="w-[300px]" />
            <Accordion className="w-[300px] border-none" defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Category</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font-[500px] text-[16px] text-[#DB4444]">
                  All products
                </Typography>{" "}
                <br />
                <Typography className="text-[#505050] font-[400px] text-[14px]">
                  Electronics
                </Typography>{" "}
                <br />
                <Typography className="text-[#505050] font-[400px] text-[14px]">
                  Home & Lifestyle
                </Typography>{" "}
                <br />
                <Typography className="text-[#505050] font-[400px] text-[14px]">
                  Medicine
                </Typography>{" "}
                <br />
                <Typography className="text-[#505050] font-[400px] text-[14px]">
                  Sports & Outdoor
                </Typography>{" "}
                <br />
                <Typography className="font-[500px] text-[16px] text-[#DB4444]">
                  See all
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="w-[300px] border-none mt-[10px]"
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Brands</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Samsung
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Apple
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Huawei
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Pocco
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Lenovo
                  </Typography>{" "}
                </div>
                <br />
                <Typography className="font-[500px] text-[16px] text-[#DB4444]">
                  See all
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="w-[300px] border-none mt-[10px]"
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Features</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Metallic
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Plastic cover
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    8GB Ram
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Super power
                  </Typography>{" "}
                </div>
                <br />
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Typography className="font-[500px] text-[16px] ml-[-40px]">
                    Large Memory
                  </Typography>{" "}
                </div>
                <br />
                <Typography className="font-[500px] text-[16px] text-[#DB4444]">
                  See all
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="w-[300px] border-none mt-[10px]"
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Price range</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: 250 }}>
                  <Slider
                    sx={{ color: "#DB4444" }}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={100}
                    max={1000}
                  />
                </Box>
                <div className="flex gap-[15px] mt-[20px]">
                  <TextField
                    type="number"
                    className="w-[116px] h-[56px]"
                    label="min"
                  />
                  <TextField
                    type="number"
                    className="w-[116px] h-[56px]"
                    label="max"
                  />
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    width: "247px",
                    height: "44px",
                    border: "1px solid #DB4444",
                    color: "#DB4444",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderRadius: "4px",
                  }}
                >
                  Apply
                </Button>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="w-[300px] border-none mt-[10px]"
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Price range</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex items-center gap-[12px]">
                  <Radio
                    sx={{
                      color: red[500],
                      "&.Mui-checked": {
                        color: red[500],
                      },
                    }}
                  />
                  <h1 className="text-[#1C1C1C] font-[400] text-[16px]">Any</h1>
                </div>
                <div className="flex items-center gap-[12px]">
                  <Radio
                    sx={{
                      color: red[500],
                      "&.Mui-checked": {
                        color: red[500],
                      },
                    }}
                  />
                  <h1 className="text-[#1C1C1C] font-[400] text-[16px]">
                    Refurbished
                  </h1>
                </div>
                <div className="flex items-center gap-[12px]">
                  <Radio
                    sx={{
                      color: red[500],
                      "&.Mui-checked": {
                        color: red[500],
                      },
                    }}
                  />
                  <h1 className="text-[#1C1C1C] font-[400] text-[16px]">
                    Brand new
                  </h1>
                </div>
                <div className="flex items-center gap-[12px]">
                  <Radio
                    sx={{
                      color: red[500],
                      "&.Mui-checked": {
                        color: red[500],
                      },
                    }}
                  />
                  <h1 className="text-[#1C1C1C] font-[400] text-[16px]">
                    Old items
                  </h1>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="w-[300px] border-none mt-[10px]"
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Ratings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} label="" />
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="child2">
          <div className="grid grid-cols-3 gap-[50px]">
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <CustomCard
                    productName={product.productName}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    image={product.image}
                    ID={product.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
