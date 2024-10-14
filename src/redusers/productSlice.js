import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteALLProductsInCart,
  DeleteProductInCard,
  ForAddToCart,
  ForDecrementProduct,
  forGetProductById,
  ForIncreaserProduct,
  getCart,
  GetCategory,
  getCategoryById,
  GetProducts,
  searchByProductName,
} from "../api/forProductsApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialState = {
  products: [],
  productById: {},
  cart: [],
  misol: "",
    category: [],
  byID:[]
};

export const forProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    forChekAddToCart: (state, action) => {
      const token = localStorage.getItem("token");
      const { ID } = action.payload;
      if (token) {
        ForAddToCart(ID);
        toast.success("Successfully added!");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(forGetProductById.fulfilled, (state, action) => {
        console.log(action.payload, "in byid");
        state.productById = action.payload;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(DeleteProductInCard.fulfilled, (state, action) => {
        toast.success(action.payload.data);
      })
      .addCase(DeleteALLProductsInCart.fulfilled, (state, action) => {
        toast.success("ALL PRODUCTS CLEAR");
      })
      .addCase(ForIncreaserProduct.fulfilled, (state, action) => {
        toast.success("Increasing");
      })
      .addCase(ForDecrementProduct.fulfilled, (state, action) => {
        toast.success("Decreasing");
      })
      .addCase(GetCategory.fulfilled, (state, action) => {
        console.log(action.payload);
        state.category = action.payload;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => { 
          console.log(action.payload);
          state.byID = action.payload;
      })
      .addCase(searchByProductName.fulfilled, (state, action) => {
        state.products = action.payload;
      })
  },
});

export const { forChekAddToCart } = forProductSlice.actions;

export default forProductSlice.reducer;
