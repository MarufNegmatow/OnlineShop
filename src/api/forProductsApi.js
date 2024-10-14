import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { useParams } from "react-router-dom";



export const GetProducts = createAsyncThunk("Products/GetProducts", async()=>{
    try {
        const {data} = await  axiosRequest.get("/Product/get-products")    
        return data.data.products;   
    } catch (error) {
        console.error(error);
    }
})



export const forGetProductById = createAsyncThunk("Products/forGetProductById",async(id)=>{
    try {
        const {data} = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`);
        return data.data;
    } catch (error) {
        console.error(error)
    }
})

export const getCart = createAsyncThunk('Products/getCart', async()=>{
    try {
        const {data} = await axiosRequest.get("Cart/get-products-from-cart")
        console.log(data)
        return data.data
    } catch (error) {
        console.error(error)
    }
})


 export async function ForAddToCart(id){
    try {
      const response = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }


  export  const DeleteProductInCard = createAsyncThunk('Products/DeleteProductInCard',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`)
        dispatch(getCart())
        return data;
    } catch (error) {
        console.error(error)
    }
  })


  export const DeleteALLProductsInCart = createAsyncThunk('Products/DeleteALLProductsInCart',async(_,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete("/Cart/clear-cart")
        dispatch(getCart())
        return data
    } catch (error) {
        console.error(error)
    }
  })

export const ForIncreaserProduct = createAsyncThunk('Products/ForIncreaserProduct',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
        dispatch(getCart())
        return data
    } catch (error) {
        console.error(error)
    }
})


export const ForDecrementProduct = createAsyncThunk('Products/ForDecrementProduct',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`)
        dispatch(getCart())
        return data
    } catch (error) {
        console.error(error)
    }
})




export const GetCategory = createAsyncThunk("Products/GetCategory", async () => {
  try {
    const { data } = await axiosRequest("/Category/get-categories");
    return data.data;
  } catch (error) {
    console.error(error);
  }
});


export const getCategoryById = createAsyncThunk(
  "Products/getCategoryById",
  async (id) => {
      try {
        console.log(id)
      const { data } = await axiosRequest.get(
        `/Category/get-category-by-id?id=${id}`
      );
      console.log("GETBYID", data.data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);


export const searchByProductName = createAsyncThunk("Products/searchByProductName", async (value) => {
  const { data } = await axiosRequest.get(
    `/Product/get-products?ProductName=${value}`
  );
  
  return data.data.products;
})



export const Magashoh = createAsyncThunk("Products/searchBy Magashoh", async (value) => {
  try {
  
  } catch (error) {
    console.error(error);
    
  }
})
